import { Injectable } from '@nestjs/common';

@Injectable()
export class ItineraryService {
  async generate(data: any) {
    // 받은 데이터 확인
    const {
      startDate,
      endDate,
      tags,
      peopleCount,
      ageGroups,
      relations,
      request,
    } = data;

    // 2️LLM 또는 일정 생성 로직 처리
    // 여기에서 ChatGPT API 같은 걸 호출하거나 직접 일정 구성 로직을 작성하면 돼
    const mockResponse = {
      startDate,
      endDate,
      schedule: [
        { day: 1, plan: '에버랜드 - 점심 - 호텔' },
        { day: 2, plan: '남이섬 - 강릉 바다' },
      ],
      message: `추천 일정이 완성되었습니다!`,
    };

    // 결과 반환
    return mockResponse;
  }
}