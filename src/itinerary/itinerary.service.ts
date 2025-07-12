import { Injectable } from '@nestjs/common';
const { Configuration, OpenAIApi } = require('openai');


function buildPrompt(data: any): string {
    const { startDate, endDate, tags, peopleCount, ageGroups, relations, request } = data;

    const ageGroupText = Object.entries(ageGroups)
        .filter(([_, count]: [string, number]) => count > 0)
        .map(([age, count]) => `${age} ${count}명`)
        .join(', ');

    const tagText = tags.length > 0 ? tags.join(', ') : '제한 없음';
    const relationText = relations.length > 0 ? relations.join(', ') : '기타';

    return `
너는 한국 철도 여행 일정 도우미야.

사용자 요청에 따라 한국의 일반철도 또는 고속철도를 활용한 여행 일정을 생성해줘.
※ 지하철은 포함하지 말고, KTX, 무궁화호, ITX, 관광열차 등만 사용해줘.

- 여행 기간: ${startDate} ~ ${endDate}
- 여행 유형: ${tagText}
- 인원 구성: 총 ${peopleCount}명 (${ageGroupText})
- 관계: ${relationText}
- 요청사항: ${request}

조건:
- 출발지는 서울역, 용산역, 수서역 중 하나로 시작
- 기차역 중심의 일정이어야 하며, 열차 노선을 고려해 지역 간 이동이 자연스럽게 구성되어야 함
- 각 날짜별로 주요 방문지, 열차 탑승 정보, 활동을 시간별로 표시
- 아래 형식으로 JSON으로 반환해줘

{
  "1": [
    { "time": "08:00", "desc": "서울역에서 전주행 KTX 탑승" },
    { "time": "10:00", "desc": "전주 한옥마을 산책" },
    ...
  ],
  "2": [
    ...
  ]
}
`;
}


@Injectable()
export class ItineraryService {
    private openai = new OpenAIApi(new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    }));


    async generate(data: any) {

        const prompt = buildPrompt(data);

        const chatCompletion = await this.openai.createChatCompletion({
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7,
        });

        const response = chatCompletion.data.choices[0].message?.content ?? '';
        const itinerary = JSON.parse(response); // 예외 처리 추가 추천

        return {
            itinerary,
            message: '일정이 성공적으로 생성되었습니다.',
        };
    }
}
