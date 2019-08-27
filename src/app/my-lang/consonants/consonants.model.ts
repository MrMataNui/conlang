export interface MannerDefaults {
	Nasal: string;
	Stop: string;
	Affricate: string;
	Fricative: string;
	Approximant: string;
	Tap: string;
	Trill: string;
	LatFric: string;
	LatApprox: string;
	LatTap: string;
	Implosive: string;
	Click: string;
}
export interface MannerDefaults2 {
	Nasal?: string;
	Stop?: string;
	Affricate?: string;
	Fricative?: string;
	Approximant?: string;
	Tap?: string;
	Trill?: string;
	LatFric?: string;
	LatApprox?: string;
	LatTap?: string;
	Implosive?: string;
	Click?: string;
}

interface MannerRegEx {
	Nasal: string[];
	Stop: string[];
	Affricate: string[];
	Fricative: string[];
	Approximant: string[];
	Tap: string[];
	Trill: string[];
	LatFric: string[];
	LatApprox: string[];
	LatTap: string[];
	Implosive: string[];
	Click: string[];
}

export interface SoundSymbols {
	sound: string;
	symbol: string;
}

export interface FullConsonantTable {
	Dental: MannerDefaults;
	Bilabial: MannerDefaults;
	Labiodental: MannerDefaults;
	Alveolar: MannerDefaults;
	Postalveolar: MannerDefaults;
	Retroflex: MannerDefaults;
	AlveoPalatal: MannerDefaults;
	Palatal: MannerDefaults;
	Velar: MannerDefaults;
	LabioVelar: MannerDefaults;
	Uvular: MannerDefaults;
	Pharyngeal: MannerDefaults;
	Glottal: MannerDefaults;
}

export interface FullConsonantTable2 {
	Dental?: MannerDefaults2;
	Bilabial?: MannerDefaults2;
	Labiodental?: MannerDefaults2;
	Alveolar?: MannerDefaults2;
	Postalveolar?: MannerDefaults2;
	Retroflex?: MannerDefaults2;
	AlveoPalatal?: MannerDefaults2;
	Palatal?: MannerDefaults2;
	Velar?: MannerDefaults2;
	LabioVelar?: MannerDefaults2;
	Uvular?: MannerDefaults2;
	Pharyngeal?: MannerDefaults2;
	Glottal?: MannerDefaults2;
}

export interface FullRegEx {
	Dental: MannerRegEx;
	Bilabial: MannerRegEx;
	Labiodental: MannerRegEx;
	Alveolar: MannerRegEx;
	Postalveolar: MannerRegEx;
	Retroflex: MannerRegEx;
	AlveoPalatal: MannerRegEx;
	Palatal: MannerRegEx;
	Velar: MannerRegEx;
	LabioVelar: MannerRegEx;
	Uvular: MannerRegEx;
	Pharyngeal: MannerRegEx;
	Glottal: MannerRegEx;
}
