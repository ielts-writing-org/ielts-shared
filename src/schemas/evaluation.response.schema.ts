import { z } from 'zod';

const checkSchema = z.object({
	weight: z.number().min(0).max(1),
	status: z.enum(['met', 'partially_met', 'not_met', 'not_applicable']),
	reason: z.string().max(200)
});

const evidenceSchema = z.object({
	type: z.enum(['strength', 'weakness', 'error', 'task_requirement']),
	text: z.string(),
	explanation: z.string()
});

const problemSchema = z.object({
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

const criterionSchema = z.object({
	band: z.number().nullable(),
	completion: z.number().nullable(),
	checks: z.array(checkSchema),
	evidence: z.array(evidenceSchema).max(5),
	strengths: z.array(z.string()).max(5),
	limitations: z.array(z.string()).max(5),
	why_this_band: z.string(),
	why_not_next_band: z.string().nullable()
});

export const evaluationResponseSchema = z.object({
	criteria: z.object({
		task_response: criterionSchema,
		coherence_and_cohesion: criterionSchema,
		lexical_resource: criterionSchema,
		grammatical_range_and_accuracy: criterionSchema
	}),
	overall_band: z.number().nullable(),
	feedback: z.object({
		strongest_areas: z.array(z.string()).max(3),
		highest_impact_problems: z.array(problemSchema).max(3),
		next_step: z.string()
	})
});

export type EvaluationResponse = z.infer<typeof evaluationResponseSchema>;
