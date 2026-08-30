import { z } from 'zod';
import { TASK2_REQUEST_LIMITS } from '../configs/task2.ts';

export const task2EvaluationRequestSchema = z.object({
	topic: z.string().min(50).max(TASK2_REQUEST_LIMITS.maxTopicChars),
	response_text: z.string().min(10).max(TASK2_REQUEST_LIMITS.maxResponseChars),
	context: z.object({ partial_response: z.boolean() })
});

export type Task2EvaluationRequest = z.infer<typeof task2EvaluationRequestSchema>;
