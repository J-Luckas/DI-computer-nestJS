import { Module } from '@nestjs/common';
import { CpuModule } from 'src/cpu/cpu.module';
import { DiskModule } from 'src/disk/disk.module';
import { ComputerController } from './computer.controller';

@Module({
  controllers: [ComputerController],
  imports: [
    // import the modules that this module depends on
    DiskModule,
    CpuModule,
  ],
})
export class ComputerModule {}
