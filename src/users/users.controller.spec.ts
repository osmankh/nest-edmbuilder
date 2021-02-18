import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  describe('users', () => {
    // Check if user controller is defined
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
    // Check if getAll return 'All Users returned'
    it('Get All Users', () => {
      expect(controller.getAll()).toBe('All Users returned');
    });
  });
});
