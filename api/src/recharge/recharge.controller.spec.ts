import { Test, TestingModule } from '@nestjs/testing';
import { RechargeController } from './recharge.controller';
import { RechargeService } from './recharge.service';
import { RechargeRepository } from './recharge.repository';
import { jest } from '@jest/globals';

describe('RechargeController', () => {
  let controller: RechargeController;
  let rechargeService: RechargeService;

  const mockRepository: jest.Mocked<RechargeRepository> = {
    save: jest.fn(),
    // findAll: jest.fn(),
    // findOne: jest.fn(),
    // update: jest.fn(),
    // remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RechargeController],
      providers: [
        RechargeService,
        { provide: 'RechargeRepository', useValue: mockRepository },
      ],
    }).compile();

    rechargeService = module.get<RechargeService>(RechargeService);
    controller = module.get<RechargeController>(RechargeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new recharge', async () => {
      const mockRecharge = {
        id: 1,
        createdAt: new Date(),
        startAt: new Date(),
        endAt: new Date(),
        offPeakHour: 1,
        fullHour: 0,
        totalCost: 0.1548,
      };

      jest.spyOn(rechargeService, 'create').mockResolvedValue(mockRecharge);

      expect(
        await controller.create({
          startAt: new Date(),
          endAt: new Date(),
        } as any),
      ).toBe(mockRecharge);
    });
  });

  // describe('findAll', () => {
  //   it('should return an array of recharges', async () => {
  //     const result = ['test'];
  //     jest.spyOn(rechargeService, 'findAll').mockImplementation(() => result);

  //     expect(await controller.findAll()).toBe(result);
  //   });
  // });
});
