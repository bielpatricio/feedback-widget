import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);
describe("Submit feedback", () => {
  it("should be able to submit feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "bug",
        comment: "example bug comment",
        screenshot: "data:image/png;base64,fejinfoibsgfos",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "example bug comment",
        screenshot: "data:image/png;base64,fejinfoibsgfos",
      })
    ).rejects.toThrow();
  });
  it("should not be able to submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "bug",
        comment: "",
        screenshot: "data:image/png;base64,fejinfoibsgfos",
      })
    ).rejects.toThrow();
  });
  it("should not be able to submit feedback with a different type os image", async () => {
    await expect(
      submitFeedback.execute({
        type: "bug",
        comment: "example bug comment",
        screenshot: "teste.jpg",
      })
    ).rejects.toThrow();
  });
});
