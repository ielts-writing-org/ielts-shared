import { z } from 'zod';

const task2EvaluationCheckSchema = z.object({
	weight: z.number().min(0).max(1),
	status: z.enum(['met', 'partially_met', 'not_met', 'not_applicable']),
	reason: z.string().max(200)
});

export type Task2EvaluationCheck = z.infer<typeof task2EvaluationCheckSchema>;

const task2EvaluationEvidenceSchema = z.object({
	type: z.enum(['strength', 'weakness', 'error', 'task_requirement']),
	text: z.string(),
	explanation: z.string()
});

export type Task2EvaluationEvidence = z.infer<typeof task2EvaluationEvidenceSchema>;

const task2EvaluationProblemSchema = z.object({
	criterion: z.enum([
		'task_response',
		'coherence_and_cohesion',
		'lexical_resource',
		'grammatical_range_and_accuracy'
	]),
	issue: z.string(),
	impact: z.string(),
	action: z.string()
});

export type Task2EvaluationProblem = z.infer<typeof task2EvaluationProblemSchema>;

const task2EvaluationCriterionSchema = z.object({
	band: z.number().nullable(),
	completion: z.number().nullable(),
	checks: z.array(task2EvaluationCheckSchema),
	evidence: z.array(task2EvaluationEvidenceSchema).max(5),
	strengths: z.array(z.string()).max(5),
	limitations: z.array(z.string()).max(5),
	why_this_band: z.string(),
	why_not_next_band: z.string().nullable()
});

export type Task2EvaluationCriterion = z.infer<typeof task2EvaluationCriterionSchema>;

export const task2EvaluationResponseSchema = z.object({
	criteria: z.object({
		task_response: task2EvaluationCriterionSchema,
		coherence_and_cohesion: task2EvaluationCriterionSchema,
		lexical_resource: task2EvaluationCriterionSchema,
		grammatical_range_and_accuracy: task2EvaluationCriterionSchema
	}),
	overall_band: z.number().nullable(),
	feedback: z.object({
		strongest_areas: z.array(z.string()).max(3),
		highest_impact_problems: z.array(task2EvaluationProblemSchema).max(3),
		next_step: z.string()
	})
});

export type Task2EvaluationResponse = z.infer<typeof task2EvaluationResponseSchema>;
