import type { OstDocument } from 'outstatic';

export type ProgramacaoPost = OstDocument & {
	archive: boolean;
	tags: { label: string; value: string }[];
};

export type PinturaPost = OstDocument & {
	tipoDeIntervencao?: string;
	local?: string;
	data?: string;
	artwork?: string;
	producao?: string;
	fotografia?: string;
	parceiros?: string;
};

export const pinturaPostFieldLabels = {
	tipoDeIntervencao: 'Tipo de Intervenção',
	local: 'Local',
	data: 'Data',
	artwork: 'Artwork',
	producao: 'Produção',
	fotografia: 'Fotografia',
	parceiros: 'Parceiros',
} as const;
