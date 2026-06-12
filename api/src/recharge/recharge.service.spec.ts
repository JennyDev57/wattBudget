import { Test, TestingModule } from '@nestjs/testing';
import { RechargeService } from './recharge.service';
import { RechargeRepository } from './recharge.repository';
import { Recharge } from '../../prisma/generated';
import { jest } from '@jest/globals';

describe('RechargeService', () => {
  let service: RechargeService;
  const mockRepository: jest.Mocked<RechargeRepository> = {
    save: jest.fn(),
    // findAll: jest.fn(),
    // findOne: jest.fn(),
    // update: jest.fn(),
    // remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RechargeService,
        {
          provide: 'RechargeRepository',
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<RechargeService>(RechargeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should calculate and save a recharge', async () => {
      const dto = {
        startAt: new Date('2026-06-12T18:00:00'),
        endAt: new Date('2026-06-13T08:00:00'),
      };
      const expectedResult = {
        id: 1,
        createdAt: new Date(),
        ...dto,
        offPeakHour: 1,
        fullHour: 0,
        totalCost: 0.1548,
      };
      mockRepository.save.mockResolvedValue(expectedResult as Recharge);

      const result = await service.create(dto);
      console.log('Result from create method:', result);

      expect(mockRepository.save).toHaveBeenCalled();
      expect(result).toEqual(expectedResult);
    });

    it('should accept ISO string dates from HTTP body and save them as Date objects', async () => {
      const dto = {
        startAt: '2026-06-12T18:00:00.000Z',
        endAt: '2026-06-13T08:00:00.000Z',
      };

      const expectedResult = {
        id: 1,
        createdAt: new Date(),
        startAt: new Date(dto.startAt),
        endAt: new Date(dto.endAt),
        offPeakHour: 1,
        fullHour: 0,
        totalCost: 0.1548,
      };

      mockRepository.save.mockResolvedValue(expectedResult as Recharge);

      const result = await service.create(dto as any);

      expect(result).toEqual(expectedResult);
      expect(mockRepository.save).toHaveBeenCalledWith(
        expect.objectContaining({
          startAt: expect.any(Date),
          endAt: expect.any(Date),
        }),
      );
    });
  });
});
