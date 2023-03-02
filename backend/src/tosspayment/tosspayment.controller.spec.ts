import { Test, TestingModule } from '@nestjs/testing';
import { TosspaymentController } from './tosspayment.controller';

describe('TosspaymentController', () => {
  let controller: TosspaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TosspaymentController],
    }).compile();

    controller = module.get<TosspaymentController>(TosspaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
