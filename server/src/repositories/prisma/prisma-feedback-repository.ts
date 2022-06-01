import { prisma } from "../../prisma";
import {
  FeedbacksRepository,
  FeedbackCreateData,
} from "../feedbacks-repository";

export class PrismaFeedbackRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type: type,
        comment: comment,
        screenshot: screenshot,
      },
    });
  }
}
