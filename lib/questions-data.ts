export interface Question {
  id: number
  question_stem: string
  topic: string
  subtopic: string
  predicted_marks: number
  question_type: 'MCQ' | 'SA' | 'LA' | 'VSA'
  confidence_score: number
  answer_outline: string[]
  hint_phrases: string[]
  full_solution: string
  difficulty: 'easy' | 'medium' | 'hard'
  evidence_years?: { year: number; excerpt: string; similarity: number }[]
  is_important?: boolean
}

export const questionsData: Question[] = [
  {
    id: 1,
    question_stem: 'Using Gauss\'s law, derive an expression for the electric field at a distance r from an infinitely long straight uniformly charged wire (linear charge density λ).',
    topic: 'Electrostatics',
    subtopic: 'Gauss\'s law',
    predicted_marks: 5,
    question_type: 'LA',
    confidence_score: 90.0,
    hint_phrases: ['cylindrical Gaussian surface', 'use symmetry, E radial and constant', 'charge enclosed = λL'],
    answer_outline: [
      'Choose a cylindrical Gaussian surface of length L',
      'Compute enclosed charge Q_enc = λL',
      'Apply Gauss\'s law ΦE = EA = Q_enc/ε₀',
      'Solve for E: E = λ/(2πε₀r)'
    ],
    full_solution: 'Consider a uniformly charged infinite wire with linear charge density λ. Take a cylindrical Gaussian surface of radius r and length L coaxial with the wire. By symmetry, the electric field is radial and constant at distance r. The flux through the curved surface is EA = E(2πrL). The flux through the end caps is zero. By Gauss\'s law: E(2πrL) = λL/ε₀. Therefore, E = λ/(2πε₀r), directed radially outward for positive charge.',
    difficulty: 'hard',
    is_important: true,
    evidence_years: [
      { year: 2023, excerpt: 'State Gauss\'s theorem and apply it to find the electric field due to an infinitely long straight uniformly charged wire.', similarity: 0.95 },
      { year: 2019, excerpt: 'use Gauss\'s law to find electric field due to an infinitely long straight uniformly charged wire', similarity: 0.92 }
    ]
  },
  {
    id: 2,
    question_stem: 'Derive the expression for the electric field on the axial line of an electric dipole of dipole moment p at a point distance r from its center.',
    topic: 'Electrostatics',
    subtopic: 'Dipole field',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 75.0,
    hint_phrases: ['consider two charges +q and -q separated by 2a', 'use superposition of fields', 'take limit as a -> 0, qa = p'],
    answer_outline: [
      'Electric field from +q and -q at axial point',
      'Superpose: E = (1/4πε₀)[q/(r-a)² - q/(r+a)²]',
      'Simplify and use dipole moment p=2qa',
      'Result: E = (1/2πε₀) × (p/r³) along axis'
    ],
    full_solution: 'For an electric dipole with charges +q at distance a from center and -q at distance a on opposite side, the dipole moment p = 2qa. At an axial point at distance r from the center, the field due to +q is E+ = kq/(r-a)² and due to -q is E- = kq/(r+a)². The net field is E = E+ - E- = kq[(r+a)² - (r-a)²]/[(r-a)²(r+a)²]. Simplifying: E = 4kqa·r/[(r²-a²)²]. In the limit where a << r (dipole approximation), E ≈ 4kqa/r³ = 2kp/r³ = p/(2πε₀r³).',
    difficulty: 'medium',
    evidence_years: [
      { year: 2020, excerpt: 'Derive the expression for the electric field due to an electric dipole at a point on its axial line.', similarity: 0.90 }
    ]
  },
  {
    id: 3,
    question_stem: 'Derive the expression for the electric potential energy of a system of two point charges q₁ and q₂ separated by distance r. What is the significance of this energy?',
    topic: 'Electrostatics',
    subtopic: 'Potential energy',
    predicted_marks: 5,
    question_type: 'LA',
    confidence_score: 70.0,
    hint_phrases: ['work done in assembling the charges', 'use formula W = q₁q₂/(4πε₀r)', 'units: joule'],
    answer_outline: [
      'Bring charge q1, then bring q2 from infinity',
      'Work done = ∫ F dr = q₁q₂/(4πε₀r)',
      'Thus potential energy U = q₁q₂/(4πε₀r)',
      'Significance: stored energy due to configuration'
    ],
    full_solution: 'To assemble the system, first place q₁ at a point (no work needed). Then bring q₂ from infinity in the field of q₁. The potential due to q₁ at distance r is V = kq₁/r. The work done is W = q₂V = kq₁q₂/r. This work is stored as potential energy. Therefore, U = kq₁q₂/r = q₁q₂/(4πε₀r). The significance is: it represents the stored energy in the configuration and determines the interaction strength. Positive U means repulsion (like charges), negative U means attraction (opposite charges). This energy is the source of electrostatic force.',
    difficulty: 'hard'
  },
  {
    id: 4,
    question_stem: 'Explain the effect of inserting a dielectric slab of constant κ fully between the plates of a parallel plate capacitor. Derive the expression for the new capacitance.',
    topic: 'Electrostatics',
    subtopic: 'Capacitance (Dielectric)',
    predicted_marks: 5,
    question_type: 'LA',
    confidence_score: 80.0,
    hint_phrases: ['bound charge reduces field', 'effective permittivity = κε₀', 'C = κε₀A/d'],
    answer_outline: [
      'Original C = ε₀A/d',
      'With dielectric, field reduces by factor 1/κ',
      'So C increases: C\' = κC = κε₀A/d',
      'Explain polarization and reduced effective field'
    ],
    full_solution: 'A dielectric slab becomes polarized in the electric field. The induced dipole moment creates a polarization field that opposes the external field. This reduces the net field inside by a factor κ (dielectric constant). The original capacitance without dielectric: C = ε₀A/d. With dielectric, the electric field reduces from E to E/κ, so the potential difference reduces from V to V/κ. Since C = Q/V and Q remains constant (isolated capacitor), the capacitance increases to C\' = κC = κε₀A/d. The dielectric constant κ is always ≥ 1, so capacitance always increases with dielectric insertion.',
    difficulty: 'hard',
    evidence_years: [
      { year: 2021, excerpt: 'Explain the working of a parallel plate capacitor with a dielectric slab. Derive the expression for its capacitance.', similarity: 0.92 }
    ]
  },
  {
    id: 5,
    question_stem: 'State Kirchhoff\'s loop and junction laws. Using these, solve for currents in a simple three-resistor loop network (diagram would be provided).',
    topic: 'Current Electricity',
    subtopic: 'Kirchhoff\'s laws',
    predicted_marks: 5,
    question_type: 'LA',
    confidence_score: 95.0,
    hint_phrases: ['conservation of charge at junction', 'conservation of energy in loop', 'set up two independent equations'],
    answer_outline: [
      'Kirchhoff\'s junction law: sum of currents into a junction equals sum out',
      'Loop law: sum of potential drops around a loop = 0',
      'Apply to given circuit to form equations',
      'Solve simultaneous equations for unknown currents'
    ],
    full_solution: 'Kirchhoff\'s Junction Law: At any junction, the sum of currents entering equals the sum leaving (ΣI_in = ΣI_out). This is based on conservation of charge. Kirchhoff\'s Loop Law: In any closed loop, the algebraic sum of EMFs equals the algebraic sum of potential drops (ΣE = ΣIR). This is based on conservation of energy. To solve a network: 1) Identify all junctions and loops. 2) Assign current directions (arbitrary). 3) Apply junction law at independent junctions. 4) Apply loop law to independent loops. 5) Solve the resulting simultaneous equations. The number of independent equations equals the number of unknown currents.',
    difficulty: 'hard',
    evidence_years: [
      { year: 2023, excerpt: 'State and explain Kirchhoff\'s laws with an example.', similarity: 0.94 }
    ]
  },
  {
    id: 6,
    question_stem: 'Show that the current density J in a conductor is given by J = nqv_d, where n is charge carrier density, q their charge, and v_d the drift speed.',
    topic: 'Current Electricity',
    subtopic: 'Drift velocity',
    predicted_marks: 2,
    question_type: 'SA',
    confidence_score: 60.0,
    hint_phrases: ['J = I/A', 'I = n q A v_d', 'substitute into J formula'],
    answer_outline: [
      'Current I = n q A v_d (charge per volume × volume per second)',
      'Divide by area A to get J=I/A',
      'Thus J = n q v_d'
    ],
    full_solution: 'In a conductor, consider a cross-sectional area A. In time t, charge carriers drift a distance v_d·t. The volume containing carriers that pass through in time t is A·v_d·t. If there are n charge carriers per unit volume, the total charge crossing in time t is: Q = n·q·A·v_d·t. The current is I = Q/t = n·q·A·v_d. The current density is J = I/A = n·q·v_d. This shows the direct relationship between drift velocity and current density.',
    difficulty: 'medium'
  },
  {
    id: 7,
    question_stem: 'Why is a potentiometer preferred over a voltmeter for measuring the EMF of a cell? Explain briefly.',
    topic: 'Current Electricity',
    subtopic: 'Potentiometer (advantages)',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 60.0,
    hint_phrases: ['potentiometer draws no current from cell (accurate EMF)', 'voltmeter draws some current (error)'],
    answer_outline: [
      'Potentiometer measures EMF without drawing current (balanced condition)',
      'Voltmeter draws current, causing loading and error',
      'Hence potentiometer gives more accurate EMF'
    ],
    full_solution: 'A potentiometer measures EMF by achieving a balanced condition where no current flows through the cell being measured. In balance, the galvanometer reads zero, so no current is drawn. This gives the true EMF without any loading error. A voltmeter, however, has high but finite resistance. It draws some current from the cell, causing a voltage drop across the internal resistance, resulting in lower reading than actual EMF. Hence, a potentiometer is more accurate for EMF measurement.',
    difficulty: 'easy'
  },
  {
    id: 8,
    question_stem: 'Derive the expression for the magnetic force on a charge q moving with velocity v in a uniform magnetic field B.',
    topic: 'Magnetism',
    subtopic: 'Lorentz force',
    predicted_marks: 5,
    question_type: 'LA',
    confidence_score: 90.0,
    hint_phrases: ['use F = q v × B', 'field perpendicular to motion'],
    answer_outline: [
      'Consider charge q with velocity v',
      'Lorentz force law states F = q(v × B)',
      'Magnitude F = qvB sinθ; direction given by right-hand rule',
      'Derivation follows from definitions of EM field effects'
    ],
    full_solution: 'The magnetic force on a moving charged particle is given by the Lorentz force law: F = q(v × B), where F is the force, q is the charge, v is the velocity, and B is the magnetic field. This is a cross product, so the force is perpendicular to both v and B. The magnitude is F = qvB sinθ, where θ is the angle between v and B. When θ = 90°, F is maximum (F = qvB). When θ = 0°, F = 0 (no force if particle moves parallel to field). The direction is given by the right-hand rule: fingers point along v, curl toward B, thumb points in F direction (for positive q).',
    difficulty: 'hard',
    evidence_years: [
      { year: 2023, excerpt: 'Derive the expression for the force acting on a charged particle moving in a uniform magnetic field.', similarity: 0.94 }
    ]
  },
  {
    id: 9,
    question_stem: 'Use the Biot–Savart law to derive the expression for the magnetic field at the centre of a circular loop of radius R carrying current I.',
    topic: 'Magnetism',
    subtopic: 'Biot-Savart law',
    predicted_marks: 5,
    question_type: 'LA',
    confidence_score: 80.0,
    hint_phrases: ['dB = (μ₀I/4π) (dl × r̂/r²)', 'integrate over loop'],
    answer_outline: [
      'Biot–Savart: dB = (μ₀/4π) × (I dl × r̂/r²)',
      'Symmetry: field along axis, magnitude constant',
      'Integrate: B = μ₀I/(2R) at center'
    ],
    full_solution: 'The Biot–Savart law states: dB = (μ₀/4π) × (I dl × r̂/r²). For a circular loop of radius R, by symmetry, the perpendicular components cancel and only axial components add. Each element dl is perpendicular to the radius vector at distance r = R. The magnitude of field due to element dl is dB = (μ₀I/4π) × (dl/R²). The axial component is dB_z = dB × (R/R) = (μ₀I R/4π R³) dl. Integrating over the full loop (circumference 2πR): B = ∫dB_z = (μ₀I/4π R²) × 2πR = μ₀I/(2R). The field is directed along the axis (perpendicular to the loop).',
    difficulty: 'hard',
    evidence_years: [
      { year: 2021, excerpt: 'State Biot-Savart law. Use it to derive the expression for the magnetic field at the center of a circular loop carrying current.', similarity: 0.93 }
    ]
  },
  {
    id: 10,
    question_stem: 'State Faraday\'s law of electromagnetic induction. Derive the expression for the induced EMF in a coil of N turns rotating at angular speed ω in a uniform magnetic field.',
    topic: 'EM Induction',
    subtopic: 'Faraday\'s law and rotating coil',
    predicted_marks: 5,
    question_type: 'LA',
    confidence_score: 80.0,
    hint_phrases: ['ε = -N dΦ/dt', 'flux = BA cos(ωt)', 'result E = NBA ω sin(ωt)'],
    answer_outline: [
      'Faraday\'s law: ε = -N(dΦ/dt)',
      'For rotating coil, Φ = BA cos(ωt)',
      'Differentiate: ε = NBA ω sin(ωt)',
      'Direction by Lenz\'s law'
    ],
    full_solution: 'Faraday\'s Law: The induced EMF in a circuit is equal to the negative rate of change of magnetic flux through it: ε = -N(dΦ/dt), where N is the number of turns. For a coil rotating with angular velocity ω in a uniform magnetic field B, the magnetic flux is Φ = BA cos(ωt), where A is the area and θ = ωt is the angle. Differentiating: dΦ/dt = -BA ω sin(ωt). Therefore, ε = NBA ω sin(ωt). The maximum EMF is ε₀ = NBA ω. This is the principle of AC generators.',
    difficulty: 'hard'
  },
  {
    id: 11,
    question_stem: 'With a labeled diagram, explain the working of an AC generator and derive the expression for its induced EMF.',
    topic: 'EM Induction',
    subtopic: 'AC Generator',
    predicted_marks: 5,
    question_type: 'LA',
    confidence_score: 70.0,
    hint_phrases: ['coil rotates in B, flux changes', 'induced EMF E = NBA ω sin(ωt)'],
    answer_outline: [
      'Diagram showing coil, slip rings, and magnet',
      'As coil rotates, flux Φ = BA cos(ωt) changes',
      'Use Faraday\'s law: E = NBA ω sin(ωt)',
      'Direction: alternating, phase with sine'
    ],
    full_solution: 'An AC generator consists of a rectangular coil rotating in a uniform magnetic field. As the coil rotates with angular velocity ω, the angle between the area vector and field changes as θ = ωt. The flux through the coil is Φ = BA cos(ωt). By Faraday\'s law, the induced EMF is ε = -dΦ/dt = NBA ω sin(ωt). The EMF varies sinusoidally with time. At θ = 0°, flux is maximum but EMF is zero. At θ = 90°, flux is zero but EMF is maximum. The peak EMF is ε₀ = NBA ω, and the frequency is f = ω/2π. The slip rings and brushes ensure continuous connection to the external circuit.',
    difficulty: 'hard'
  },
  {
    id: 12,
    question_stem: 'Derive the expression for the impedance Z of a series LCR circuit: Z = √[R² + (ωL - 1/ωC)²]. What is the condition for resonance?',
    topic: 'AC Circuits',
    subtopic: 'Impedance and resonance',
    predicted_marks: 5,
    question_type: 'LA',
    confidence_score: 90.0,
    hint_phrases: ['reactance X_L = ωL, X_C = 1/(ωC)', 'total Z from vector sum of R, X_L, X_C'],
    answer_outline: [
      'Impedance Z² = R² + (X_L - X_C)²',
      'Where X_L = ωL, X_C = 1/(ωC)',
      'Thus Z = √[R² + (ωL - 1/ωC)²]',
      'Resonance when X_L = X_C (i.e. ω = 1/√(LC))'
    ],
    full_solution: 'In a series LCR circuit, the resistor R, inductor (reactance X_L = ωL), and capacitor (reactance X_C = 1/ωC) are in series. The voltage across R is in phase with current, but voltage across L leads current by 90°, and voltage across C lags by 90°. The net reactance is X = X_L - X_C = ωL - 1/(ωC). The impedance Z is the vector sum: Z² = R² + X², giving Z = √[R² + (ωL - 1/ωC)²]. At resonance, X_L = X_C, so ωL = 1/(ωC), giving ω₀ = 1/√(LC). At resonance, Z = R (minimum), and current is maximum.',
    difficulty: 'hard',
    evidence_years: [
      { year: 2020, excerpt: 'Derive the expression for the impedance of an LCR series circuit.', similarity: 0.93 }
    ]
  },
  {
    id: 13,
    question_stem: 'What is resonance in an LCR circuit? Derive the condition for resonance in terms of L and C.',
    topic: 'AC Circuits',
    subtopic: 'Resonance',
    predicted_marks: 2,
    question_type: 'SA',
    confidence_score: 60.0,
    hint_phrases: ['amplitude maximum', 'net reactance zero', 'ω = 1/√(LC)'],
    answer_outline: [
      'Resonance: when inductive and capacitive reactances cancel',
      'circuit current is maximum',
      'Condition: X_L = X_C gives ω₀ = 1/√(LC)'
    ],
    full_solution: 'Resonance in an LCR circuit occurs when the inductive reactance equals the capacitive reactance: X_L = X_C. This means ωL = 1/(ωC), which simplifies to ω² = 1/(LC), giving ω₀ = 1/√(LC). At this frequency, the impedance is minimum (Z = R only), so the current is maximum. The circuit is purely resistive at resonance. The resonant frequency f₀ = ω₀/(2π) = 1/(2π√(LC)). This is the natural oscillation frequency of the LC circuit.',
    difficulty: 'medium'
  },
  {
    id: 14,
    question_stem: 'Derive the lens-maker\'s formula for a thin convex lens in air: (1/f) = (n-1)[(1/R₁) - (1/R₂)].',
    topic: 'Ray Optics',
    subtopic: 'Lens-maker\'s formula',
    predicted_marks: 5,
    question_type: 'LA',
    confidence_score: 80.0,
    hint_phrases: ['use refraction formula twice', 'sum of powers = (n-1)(1/R1 - 1/R2)', 'assume lens thin'],
    answer_outline: [
      'Apply refraction formula at both surfaces',
      'Assume paraxial rays and thin lens approximation',
      'Combine to get (1/f) = (n-1)[(1/R₁) - (1/R₂)]'
    ],
    full_solution: 'For a thin lens with surfaces of radius R₁ and R₂, apply the refraction formula at each surface. At the first surface: (n/v₁) - (1/u) = (n-1)/R₁. At the second surface, the object for refraction is the image formed by the first surface. Using the thin lens approximation (thickness ≈ 0), the distance from first to second surface is negligible. For a distant object (u → ∞, v₁ → f), the refracted light becomes parallel at the second surface. Combining: 1/f = (n-1)/R₁ - (n-1)/R₂ = (n-1)[(1/R₁) - (1/R₂)]. Sign convention: R positive for convex surface towards object.',
    difficulty: 'hard',
    evidence_years: [
      { year: 2018, excerpt: 'Derive the lens maker\'s formula for a convex lens.', similarity: 0.92 }
    ]
  },
  {
    id: 15,
    question_stem: 'Explain total internal reflection. State the conditions under which it occurs in a prism.',
    topic: 'Ray Optics',
    subtopic: 'Total internal reflection',
    predicted_marks: 3,
    question_type: 'SA',
    confidence_score: 75.0,
    hint_phrases: ['light going from denser to rarer medium', 'angle of incidence > critical angle', 'sin(θ_c) = 1/n'],
    answer_outline: [
      'Light going from denser to rarer medium',
      'When angle of incidence exceeds critical angle θ_c',
      'Light is reflected back into denser medium',
      'Critical angle: sin(θ_c) = n₂/n₁'
    ],
    full_solution: 'Total internal reflection occurs when light traveling from a denser medium (refractive index n₁) attempts to enter a rarer medium (refractive index n₂ < n₁). Using Snell\'s law at the critical angle: n₁ sin(θ_c) = n₂ sin(90°) = n₂. Thus sin(θ_c) = n₂/n₁. When the angle of incidence θ > θ_c, the refracted ray cannot exist, and total reflection occurs. In a prism, this is used to bend light 90° (45-45-90 prism) or deviate it 180° (reflecting prism). The phenomenon requires: (1) light in denser medium, (2) hitting rarer medium boundary, (3) angle of incidence > critical angle.',
    difficulty: 'medium'
  },
  {
    id: 16,
    question_stem: 'State the conditions for constructive and destructive interference in Young\'s double-slit experiment. Sketch the intensity pattern.',
    topic: 'Wave Optics',
    subtopic: 'Young\'s double-slit experiment',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 80.0,
    hint_phrases: ['path difference = mλ for constructive', 'path difference = (m+1/2)λ for destructive', 'intensity pattern shows alternating bright and dark fringes'],
    answer_outline: [
      'Constructive: path difference = mλ (m = 0, 1, 2, ...)',
      'Destructive: path difference = (m+1/2)λ',
      'Pattern: alternating bright and dark fringes',
      'Intensity varies as cos²(kΔx)'
    ],
    full_solution: 'In Young\'s double-slit experiment, two coherent light sources (slits) create an interference pattern. Constructive interference occurs when the path difference Δx = mλ, where m is an integer. This creates bright fringes. Destructive interference occurs when Δx = (m + 1/2)λ, creating dark fringes. The intensity at any point is given by I = I₀[1 + cos(2πΔx/λ)]. The pattern shows equally spaced alternating bright and dark fringes. The fringe spacing (distance between adjacent bright or dark fringes) is w = λD/d, where D is distance to screen and d is slit separation. The intensity pattern is symmetric about the central bright fringe.',
    difficulty: 'hard'
  },
  {
    id: 17,
    question_stem: 'Explain Huygens\' principle and use it to derive the laws of reflection and refraction.',
    topic: 'Wave Optics',
    subtopic: 'Huygens\' principle',
    predicted_marks: 5,
    question_type: 'LA',
    confidence_score: 70.0,
    hint_phrases: ['each point is a secondary source', 'wavelets construct new wavefront', 'apply to plane waves'],
    answer_outline: [
      'Each point on a wavefront acts as secondary source',
      'Secondary wavelets propagate in all directions',
      'New wavefront is tangent to all wavelets',
      'For reflection: angle of incidence = angle of reflection'
    ],
    full_solution: 'Huygens\' Principle states that each point on a wavefront acts as a secondary source of wavelets. The wavefront at a later time is the envelope (tangent surface) of all these wavelets. For reflection: When a plane wave hits a reflective surface, each point on the incident wavefront produces secondary wavelets. The tangent to these wavelets gives the reflected wavefront, resulting in the angle of reflection equaling the angle of incidence. For refraction: When a wave enters a medium with different speed (v₁ vs v₂), the wavelets in the new medium travel different distances in the same time. The envelope (tangent) of these wavelets is tilted. Using geometry: sin(i)/sin(r) = v₁/v₂ = n₂/n₁ (Snell\'s law).',
    difficulty: 'hard'
  },
  {
    id: 18,
    question_stem: 'State Einstein\'s photoelectric equation and explain its significance. Sketch the stopping potential vs. frequency graph.',
    topic: 'Dual Nature of Matter',
    subtopic: 'Photoelectric effect',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 85.0,
    hint_phrases: ['hf = Φ + KE_max', 'photon energy = work function + maximum KE', 'graph is linear with slope h/e'],
    answer_outline: [
      'Einstein equation: hf = Φ + KE_max',
      'hf = photon energy, Φ = work function',
      'KE_max = maximum kinetic energy of electrons',
      'Stopping potential V_s = KE_max/e'
    ],
    full_solution: 'Einstein\'s Photoelectric Equation: hf = Φ + KE_max. Here, hf is the photon energy (h = Planck\'s constant, f = frequency), Φ is the work function (minimum energy to remove electron), and KE_max is the maximum kinetic energy of emitted electrons. The significance: it explains the photoelectric effect by treating light as quanta (photons) with energy hf. The stopping potential is defined as: eV_s = KE_max, or V_s = (h/e)f - Φ/e. The graph of V_s vs f is linear with slope h/e (Planck\'s constant divided by electron charge) and x-intercept at f₀ = Φ/h (threshold frequency). Photoemission occurs only when f ≥ f₀.',
    difficulty: 'hard'
  },
  {
    id: 19,
    question_stem: 'Derive the expression for the de Broglie wavelength λ = h/p of a particle.',
    topic: 'Dual Nature of Matter',
    subtopic: 'de Broglie wavelength',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 65.0,
    hint_phrases: ['E = hf = pc for photons', 'p = mv for particles', 'λ = h/p'],
    answer_outline: [
      'For photons: E = hf, p = E/c = hf/c = h/λ',
      'Thus λ = h/p for photons',
      'de Broglie proposed same for matter: λ = h/p',
      'p = mv is momentum of particle'
    ],
    full_solution: 'de Broglie proposed that matter particles exhibit wave properties. For photons, E = hf and p = E/c, so p = hf/c = h/λ, giving λ = h/p. de Broglie extended this to material particles: λ = h/p, where p = mv is the momentum. For an electron with kinetic energy KE: p = √(2m·KE), so λ = h/√(2m·KE). This wavelength is extremely small for macroscopic objects (making wave properties unobservable) but significant for electrons. The dual nature (wave-particle duality) is confirmed by electron diffraction experiments showing interference patterns.',
    difficulty: 'medium'
  },
  {
    id: 20,
    question_stem: 'Explain Bohr\'s postulates and derive the expression for the radius of the nth orbit of a hydrogen atom.',
    topic: 'Atoms',
    subtopic: 'Bohr model',
    predicted_marks: 5,
    question_type: 'LA',
    confidence_score: 85.0,
    hint_phrases: ['postulate 1: electron in circular orbit', 'postulate 2: angular momentum = nh/(2π)', 'balance centripetal and coulomb forces'],
    answer_outline: [
      'Electrons in discrete circular orbits with fixed energies',
      'Angular momentum L = mvr = nh/(2π)',
      'Centripetal force = coulomb attraction',
      'Result: r_n = n²a₀ where a₀ = 0.53 Å'
    ],
    full_solution: 'Bohr\'s Postulates: (1) Electrons move in circular orbits around nucleus with fixed energies (stationary states). (2) Angular momentum is quantized: mvr = nh/(2π), where n = 1, 2, 3... (3) Electron transitions between orbits emit/absorb photons with energy hf = ΔE. For hydrogen, balance centripetal force with coulomb attraction: mv²/r = ke²/r². From postulate 2: v = nh/(2πmr). Substituting: m[nh/(2πmr)]²/r = ke²/r². Solving for r: r_n = n²h²ε₀/(πmke²) = n² × 0.53 Å = n²a₀, where a₀ is the Bohr radius. The ground state is n=1 with radius 0.53 Å.',
    difficulty: 'hard'
  }
]

export const topics = [
  'Electrostatics',
  'Current Electricity',
  'Magnetism',
  'EM Induction',
  'AC Circuits',
  'Ray Optics',
  'Wave Optics',
  'Dual Nature of Matter',
  'Atoms',
  'Semiconductor Devices'
]

export const questionTypes = ['MCQ', 'SA', 'LA', 'VSA']

export const marks = [2, 4, 5]
