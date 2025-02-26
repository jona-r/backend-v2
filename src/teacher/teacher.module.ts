import { Module } from "@nestjs/common";
import { TeacherController } from "./teacher.controller";
import { TeacherService } from "../adapters/default/teacher.adapter";
import { HttpModule } from "@nestjs/axios";
@Module({
  imports: [HttpModule],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
