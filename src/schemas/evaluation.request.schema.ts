import { ESSAY_LIMITS } from '../constants/essay.constant.js';
import { z } from 'zod';

export const task2EvaluationRequestSchema = z.object({
	topic: z.string().min(1).max(ESSAY_LIMITS.maxTopicChars),
	response_text: z.string().min(1).max(ESSAY_LIMITS.maxResponseChars),
	context: z.object({ partial_response: z.boolean() })
});

export type Task2EvaluationRequest = z.infer<typeof task2EvaluationRequestSchema>;
