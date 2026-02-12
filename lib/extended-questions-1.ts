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
}

// Extended questions part 1: 200 additional questions
export const extendedQuestionsSet1: Question[] = [
  // CHAPTER 1: ELECTRIC CHARGES AND FIELDS (25 additional)
  {
    id: 62,
    question_stem: 'Two charges +q and +q are placed 2m apart. Find the electric field at a point on the perpendicular bisector 1m away.',
    topic: 'Electric Charges and Fields',
    subtopic: 'Electric Field',
    predicted_marks: 3,
    question_type: 'SA',
    confidence_score: 80,
    answer_outline: ['Each charge creates field at distance √(1²+1²)=√2 m', 'E from each = kq/(2)', 'Vertical components cancel by symmetry', 'Horizontal components add'],
    hint_phrases: ['perpendicular bisector symmetry', 'distance calculation', 'vector addition'],
    full_solution: 'Distance from each charge to point on perpendicular bisector at 1m height = √(1² + 1²) = √2 m. Field magnitude from each charge: E = kq/2. The field from left charge points away at angle θ to vertical where sin θ = 1/√2. Vertical components cancel. Horizontal components add: E_net = 2 × (kq/2) × cos θ = 2 × (kq/2) × (1/√2) = kq/√2 ≈ 0.707kq pointing toward center.',
    difficulty: 'medium'
  },
  {
    id: 63,
    question_stem: 'State the principle of superposition for electric fields.',
    topic: 'Electric Charges and Fields',
    subtopic: 'Superposition Principle',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 94,
    answer_outline: ['Total field = vector sum of individual fields', 'Each charge creates field independently', 'Presence of one charge doesn\'t affect field from another'],
    hint_phrases: ['vector sum', 'linear superposition'],
    full_solution: 'Principle of superposition: The total electric field at any point due to multiple charges is the vector sum of electric fields due to individual charges. Each charge contributes as if others were absent. E_total = E₁ + E₂ + E₃ + ... This allows us to find complex field patterns by adding individual contributions.',
    difficulty: 'easy'
  },
  {
    id: 64,
    question_stem: 'A charge q is at the center of a cube. What is the flux through one face?',
    topic: 'Electric Charges and Fields',
    subtopic: 'Gauss\'s Law',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 92,
    answer_outline: ['Total flux through cube = q/ε₀ by Gauss\'s law', 'Cube has 6 faces', 'By symmetry, flux through each face = (q/ε₀)/6'],
    hint_phrases: ['cubic symmetry', 'equal distribution', 'Gauss\'s law'],
    full_solution: 'By Gauss\'s law, total flux through closed surface = q/ε₀. Due to cubic symmetry, charge at center creates equal flux through each of 6 faces. Therefore, flux through one face = q/(6ε₀).',
    difficulty: 'easy'
  },
  {
    id: 65,
    question_stem: 'Derive the electric field between two oppositely charged parallel plates.',
    topic: 'Electric Charges and Fields',
    subtopic: 'Application of Gauss\'s Law',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 81,
    answer_outline: ['Each plate creates field σ/2ε₀', 'Between plates: fields add', 'Outside: fields cancel', 'Total field between = σ/ε₀'],
    hint_phrases: ['superposition', 'infinite charged planes'],
    full_solution: 'Each infinite charged plate with surface charge density σ creates field E = σ/(2ε₀) on both sides. Between opposite plates with +σ and -σ: fields add constructively (same direction). Outside plates: fields cancel. Net field between plates = σ/(2ε₀) + σ/(2ε₀) = σ/ε₀.',
    difficulty: 'medium'
  },
  {
    id: 66,
    question_stem: 'What is electric flux? If E field is non-uniform, how is flux calculated?',
    topic: 'Electric Charges and Fields',
    subtopic: 'Electric Flux',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 88,
    answer_outline: ['Flux = ∮E·dA', 'For uniform field: Φ = EA cos θ', 'For non-uniform: integrate over surface', 'Units: V·m or N·m²/C'],
    hint_phrases: ['dot product', 'surface integral', 'normal to surface'],
    full_solution: 'Electric flux is measure of electric field passing through a surface: Φ = ∮E·dA. For uniform field: Φ = EA cos θ (A is area, θ is angle between E and normal). For non-uniform field: divide surface into small elements dA and integrate: Φ = ∫E·dA. Units: V·m or N·m²/C = Wb (Weber).',
    difficulty: 'medium'
  },
  {
    id: 67,
    question_stem: 'A conducting sphere of radius R has charge Q. Find E inside and on surface.',
    topic: 'Electric Charges and Fields',
    subtopic: 'Conductors',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 89,
    answer_outline: ['Inside conductor: E = 0', 'On surface: E = σ/ε₀ = Q/(4πε₀R²)', 'Charge distributes on surface'],
    hint_phrases: ['conductor property', 'all charge on surface'],
    full_solution: 'In electrostatic equilibrium, electric field inside conductor is zero (E = 0). All charge resides on surface with surface charge density σ = Q/(4πR²). Just outside surface, using Gauss\'s law: E = σ/ε₀ = Q/(4πε₀R²). Potential throughout conductor is uniform: V = kQ/R.',
    difficulty: 'medium'
  },
  {
    id: 68,
    question_stem: 'Explain corona discharge and its causes.',
    topic: 'Electric Charges and Fields',
    subtopic: 'Electric Breakdown',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 75,
    answer_outline: ['Occurs at sharp points with high field', 'Field exceeds breakdown field of air', 'Ionizes air creating visible discharge', 'Due to curved surface, high field concentration'],
    hint_phrases: ['field enhancement', 'ionization', 'breakthrough voltage'],
    full_solution: 'Corona discharge occurs at sharp conducting points where electric field becomes very strong (>3×10⁶ V/m, breakdown field of air). At sharp points, field lines concentrate, creating high local field. This ionizes air molecules, causing visible glow. Explains why: high voltage power lines hum, sharp objects on charged conductors can cause sparks.',
    difficulty: 'easy'
  },
  {
    id: 69,
    question_stem: 'Define polarization and polarizability of molecules.',
    topic: 'Electric Charges and Fields',
    subtopic: 'Electric Dipole',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 82,
    answer_outline: ['Polarization: shift of electron cloud relative to nucleus', 'Induced dipole moment p = αE', 'α: polarizability (molecular property)', 'p_induced direction opposite to external field in insulators'],
    hint_phrases: ['induced dipole', 'electron displacement', 'molecular property'],
    full_solution: 'Polarization is distortion of electron cloud in neutral molecule under external field. Induced dipole moment p = αE, where α is polarizability (measure of ease of polarization). For different atoms: α depends on size, electrons freedom of movement. Larger atoms more polarizable. Polarization creates internal field opposing external field in insulators.',
    difficulty: 'medium'
  },
  {
    id: 70,
    question_stem: 'Two point charges are displaced from equilibrium. Explain if the equilibrium is stable or unstable.',
    topic: 'Electric Charges and Fields',
    subtopic: 'Equilibrium',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 78,
    answer_outline: ['Static equilibrium exists if net force = 0', 'For two like charges: equilibrium unstable', 'Small displacement makes force increase', 'Restoring force absent'],
    hint_phrases: ['force analysis', 'perturbation', 'restoring vs driving force'],
    full_solution: 'For two similar charges (both +q) on a line separated by distance r, equilibrium point exists at midpoint (F_net = 0). However, if middle charge (q₀) is displaced slightly toward one, that charge repels harder, pushing it further away. Force increases with displacement - unstable equilibrium. No restoring force exists.',
    difficulty: 'easy'
  },
  {
    id: 71,
    question_stem: 'A uniformly charged ring of radius R carries charge Q. Find field at axis.',
    topic: 'Electric Charges and Fields',
    subtopic: 'Continuous Charge Distribution',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 80,
    answer_outline: ['By symmetry, radial components cancel', 'Only axial component survives', 'E_axial = kQx/(x² + R²)^(3/2)', 'At center: E = 0'],
    hint_phrases: ['symmetry argument', 'radial cancellation', 'axial distance x'],
    full_solution: 'For uniformly charged ring, consider element dq at angle θ. It creates field with components both radial and axial at point distance x on axis. All radial components from symmetric elements cancel. Axial components add: E = ∫kx dq/(x² + R²)^(3/2) = kxQ/(x² + R²)^(3/2). At center (x = 0): E = 0.',
    difficulty: 'medium'
  },
  {
    id: 72,
    question_stem: 'Find the electric potential at a distance r from a point charge Q.',
    topic: 'Electric Charges and Fields',
    subtopic: 'Electric Potential',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 94,
    answer_outline: ['V = kQ/r', 'Reference potential at r = ∞ is zero', 'Units: Volts (J/C)', 'Scalar quantity (unlike field vector)'],
    hint_phrases: ['Coulomb potential', 'SI units', 'reference point'],
    full_solution: 'Electric potential at distance r from point charge Q: V(r) = kQ/r = Q/(4πε₀r). Taking reference V(∞) = 0. For negative charge: V is negative. Potential is scalar, allowing easier calculation than field in some situations. Work done bringing unit positive charge from infinity to r: W = qV = kQ/r.',
    difficulty: 'easy'
  },

  // CHAPTER 2: ELECTROSTATIC POTENTIAL AND CAPACITANCE (25 additional)
  {
    id: 73,
    question_stem: 'Prove that work done is independent of path for conservative electric field.',
    topic: 'Electrostatic Potential and Capacitance',
    subtopic: 'Conservative Field',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 79,
    answer_outline: ['∮E·dl = 0 (conservative property)', 'Work from A to B path 1 = -Work path 2', 'Potential difference V_AB same regardless of path'],
    hint_phrases: ['line integral', 'closed loop', 'electrostatic field'],
    full_solution: 'For electrostatic field: ∮E·dl = 0 (Faraday\'s law for static fields). This means for any closed path, total work = 0. For path 1 and path 2 from A to B: W₁ + W_reverse2 = 0, so W₁ = W₂. Path independence follows. Potential difference depends only on endpoints: V_AB = -∫E·dl = V_A - V_B (same for any path).',
    difficulty: 'medium'
  },
  {
    id: 74,
    question_stem: 'A conductor is placed in electric field. Explain field inside conductor becomes zero.',
    topic: 'Electrostatic Potential and Capacitance',
    subtopic: 'Conductors in Fields',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 85,
    answer_outline: ['External field exerts force on free charges', 'Charges move until internal field cancels external', 'Equilibrium when E_internal + E_external = 0', 'Takes very short time (~10^-19 s)'],
    hint_phrases: ['charge redistribution', 'equilibrium condition', 'charge mobility'],
    full_solution: 'When conductor placed in external field E_ext, free charges experience force. Positive charges accumulate on one face, negative on other, creating internal field E_int. In equilibrium: E_int = -E_ext, making total field inside = 0. This happens essentially instantaneously due to high charge mobility. Result: entire conductor is equipotential.',
    difficulty: 'medium'
  },
  {
    id: 75,
    question_stem: 'Find capacitance of a parallel plate capacitor with dielectric constant k.',
    topic: 'Electrostatic Potential and Capacitance',
    subtopic: 'Dielectric Capacitors',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 90,
    answer_outline: ['C = kε₀A/d', 'k: relative permittivity', 'Capacitance increases by factor k', 'A: area, d: separation'],
    hint_phrases: ['dielectric insertion', 'relative permittivity', 'geometric factors'],
    full_solution: 'When dielectric of relative permittivity (dielectric constant) k fills space between plates: C = kε₀A/d = kC₀, where C₀ = ε₀A/d is capacitance without dielectric. k > 1 always (materials are more polarizable than vacuum). Higher k means higher capacitance. Common dielectrics: vacuum k=1, paper k≈3.7, ceramic k can be hundreds.',
    difficulty: 'easy'
  },
  {
    id: 76,
    question_stem: 'A 4μF capacitor is charged to 100V then connected in parallel with uncharged 2μF capacitor. Find final voltage.',
    topic: 'Electrostatic Potential and Capacitance',
    subtopic: 'Capacitor Combinations',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 88,
    answer_outline: ['Initial charge Q = 4×10⁻⁶ × 100 = 400 μC', 'After connection: Q_total = Q₁ + Q₂', 'C_total = 4 + 2 = 6 μF', 'V_final = Q_total/C_total = 400/6 ≈ 66.7V'],
    hint_phrases: ['charge conservation', 'parallel connection', 'voltage equalization'],
    full_solution: 'Initial: Q₁ = C₁V₁ = 4 × 100 = 400 μC (in 4μF), Q₂ = 0. After connection in parallel: charges redistribute until voltage equalizes. Total charge Q_total = 400 + 0 = 400 μC. Total capacitance C_eq = 4 + 2 = 6 μF. Final voltage V = Q_total/C_eq = 400/6 = 66.67V across both capacitors.',
    difficulty: 'medium'
  },
  {
    id: 77,
    question_stem: 'Derive the formula for energy density in electric field.',
    topic: 'Electrostatic Potential and Capacitance',
    subtopic: 'Energy Density',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 81,
    answer_outline: ['Energy in capacitor U = ½CV²', 'Volume between plates V = Ad', 'U = ½ε₀A/d × (Ed)² = ½ε₀E²Ad', 'Energy density u = U/(Ad) = ½ε₀E²'],
    hint_phrases: ['volume element', 'field strength', 'energy per unit volume'],
    full_solution: 'For parallel plate capacitor: U = ½CV² = ½(ε₀A/d)(Ed)² = ½ε₀AE²d. Volume = Ad. Energy density (energy per unit volume) u = U/V = ½ε₀E². This is the energy stored per unit volume in electric field. More generally, wherever there\'s electric field E, energy density = ½ε₀E² (independent of source).',
    difficulty: 'medium'
  },
  {
    id: 78,
    question_stem: 'A parallel plate capacitor partially immersed in dielectric. Find capacitance.',
    topic: 'Electrostatic Potential and Capacitance',
    subtopic: 'Partial Dielectric',
    predicted_marks: 4,
    question_type: 'SA',
    confidence_score: 79,
    answer_outline: ['Part with dielectric: C₁ = kε₀A/d', 'Part without: C₂ = ε₀A/d', 'Effective: treat as parallel combination', 'C_eff depends on fraction immersed'],
    hint_phrases: ['parallel capacitances', 'area fraction', 'two regions'],
    full_solution: 'If capacitor of area A and separation d is partially filled with dielectric (fraction x): Capacitance of dielectric portion: C₁ = kε₀(xA)/d. Capacitance of vacuum portion: C₂ = ε₀((1-x)A)/d. These act in parallel (same voltage): C_total = C₁ + C₂ = ε₀A/d[kx + (1-x)] = ε₀A/d[1 + x(k-1)].',
    difficulty: 'medium'
  },
  {
    id: 79,
    question_stem: 'Explain the concept of potential gradient.',
    topic: 'Electrostatic Potential and Capacitance',
    subtopic: 'Electric Field and Potential',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 87,
    answer_outline: ['Potential gradient = -dV/dr', 'Equals magnitude of electric field', 'Direction from high to low potential', 'Units: V/m'],
    hint_phrases: ['derivative of potential', 'field definition', 'spatial variation'],
    full_solution: 'Potential gradient is rate of change of potential with distance: dV/dr. Electric field magnitude E = -dV/dr (negative sign because field points from high to low potential). If potential drops by 100V over 1m, potential gradient = 100 V/m = E field. In uniform field: E = V/d (uniform potential drop).',
    difficulty: 'easy'
  },
  {
    id: 80,
    question_stem: 'A spherical conductor of radius R carries charge Q. Find potential everywhere.',
    topic: 'Electrostatic Potential and Capacitance',
    subtopic: 'Potential of Conductor',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 89,
    answer_outline: ['Inside: V = kQ/R (constant)', 'On surface: V = kQ/R', 'Outside at distance r: V = kQ/r', 'Same throughout conductor'],
    hint_phrases: ['conductor equipotential', 'charge on surface'],
    full_solution: 'For spherical conductor of radius R with charge Q: Inside (r < R): E = 0 so V = constant = kQ/R. On surface (r = R): V = kQ/R. Outside (r > R): V = kQ/r (like point charge). Entire conductor at same potential V = kQ/R. This is why large conductors have relatively low surface field.',
    difficulty: 'easy'
  },
  {
    id: 81,
    question_stem: 'Two capacitors charged to same voltage connected in parallel. Compare energy stored.',
    topic: 'Electrostatic Potential and Capacitance',
    subtopic: 'Energy Storage',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 91,
    answer_outline: ['U = ½CV²', 'Both at same V', 'Capacitor with larger C stores more energy', 'U ∝ C (for fixed V)'],
    hint_phrases: ['energy formula', 'voltage same', 'capacitance dependence'],
    full_solution: 'For two capacitors at same voltage V: U₁ = ½C₁V² and U₂ = ½C₂V². Energy ratio U₁/U₂ = C₁/C₂. Larger capacitance stores more energy at same voltage. This explains why capacitors rated for same voltage but different capacitances dissipate different energies when discharged.',
    difficulty: 'easy'
  },

  // CHAPTER 3: CURRENT ELECTRICITY (25 additional)
  {
    id: 82,
    question_stem: 'A wire of length L, radius r has resistance R. If length doubled and radius halved, find new resistance.',
    topic: 'Current Electricity',
    subtopic: 'Resistance',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 93,
    answer_outline: ['R = ρL/A', 'R\' = ρ(2L)/(π(r/2)²) = ρ(2L)/(πr²/4) = 8ρL/(πr²) = 8R'],
    hint_phrases: ['area scales as radius squared', 'length proportional', 'combined effect'],
    full_solution: 'Original: R = ρL/(πr²). New length = 2L, new radius = r/2, so new area = π(r/2)² = πr²/4. New resistance R\' = ρ(2L)/(πr²/4) = 8ρL/(πr²) = 8R. Doubling length increases R by 2×, halving radius decreases area by 4× (increases R by 4×), combined effect = 8×.',
    difficulty: 'easy'
  },
  {
    id: 83,
    question_stem: 'Explain the motion of electrons in conductor under electric field.',
    topic: 'Current Electricity',
    subtopic: 'Drift Velocity',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 84,
    answer_outline: ['Electrons accelerate in field direction', 'Collide with atoms periodically', 'Average velocity (drift velocity) is very small', 'v_d = eEτ/m, typically ~mm/s'],
    hint_phrases: ['acceleration and collision', 'mean free path', 'net displacement'],
    full_solution: 'Electrons in conductor experience force from electric field: F = eE. They accelerate between collisions, but collisions randomize motion. Average velocity (drift velocity) v_d = eEτ/m where τ is mean time between collisions. Typical drift velocity ~mm/s (very slow!). Despite slow drift, current large because ~10²³ electrons per cm³. This explains why light travels at c but charges move slowly.',
    difficulty: 'medium'
  },
  {
    id: 84,
    question_stem: 'In a circuit with EMF ε and internal resistance r, if external resistance is R, find power dissipated in R.',
    topic: 'Current Electricity',
    subtopic: 'Power and EMF',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 89,
    answer_outline: ['Current I = ε/(R+r)', 'Power in R: P = I²R = ε²R/(R+r)²', 'Maximum when R = r'],
    hint_phrases: ['Ohm\'s law', 'power formula', 'maximum power theorem'],
    full_solution: 'With EMF ε, internal resistance r, external resistance R: I = ε/(R+r). Power dissipated in R: P = I²R = ε²R/(R+r)². For maximum power transfer, we want dP/dR = 0. This gives R = r (maximum power theorem). Maximum power = ε²/(4r).',
    difficulty: 'medium'
  },
  {
    id: 85,
    question_stem: 'A battery with ε=10V, r=1Ω is connected to external load R=9Ω. Find terminal voltage.',
    topic: 'Current Electricity',
    subtopic: 'Terminal Voltage',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 92,
    answer_outline: ['I = ε/(R+r) = 10/10 = 1A', 'V_terminal = ε - Ir = 10 - 1 = 9V'],
    hint_phrases: ['Ohm\'s law', 'voltage drop in internal resistance'],
    full_solution: 'Current through circuit: I = ε/(R+r) = 10/(9+1) = 1A. Terminal voltage (voltage across external load): V = ε - Ir = 10 - 1×1 = 9V. The 1V drop occurs inside battery due to internal resistance.',
    difficulty: 'easy'
  },
  {
    id: 86,
    question_stem: 'In parallel connection of three resistances 6Ω, 3Ω, 2Ω across 12V, find total current.',
    topic: 'Current Electricity',
    subtopic: 'Parallel Circuits',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 93,
    answer_outline: ['In parallel, voltage same = 12V', 'I = V/R, total = V(1/R₁ + 1/R₂ + 1/R₃)', 'I_total = 12(1/6 + 1/3 + 1/2) = 12 × 1 = 12A'],
    hint_phrases: ['same voltage', 'currents add', 'conductance sum'],
    full_solution: 'In parallel: same voltage V = 12V across all. Currents: I₁ = 12/6 = 2A, I₂ = 12/3 = 4A, I₃ = 12/2 = 6A. Total I = 2 + 4 + 6 = 12A. Equivalent resistance: 1/R_eq = 1/6 + 1/3 + 1/2 = 1/6 + 2/6 + 3/6 = 6/6 = 1, so R_eq = 1Ω.',
    difficulty: 'easy'
  },
  {
    id: 87,
    question_stem: 'Three cells with EMF 2V, 3V, 4V and internal resistances 1Ω, 1.5Ω, 2Ω connected in series. Find total EMF and total internal resistance.',
    topic: 'Current Electricity',
    subtopic: 'Series Cells',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 91,
    answer_outline: ['Total EMF = ε₁ + ε₂ + ε₃ = 2 + 3 + 4 = 9V', 'Total internal resistance = r₁ + r₂ + r₃ = 1 + 1.5 + 2 = 4.5Ω'],
    hint_phrases: ['series addition', 'internal resistances add'],
    full_solution: 'In series: EMFs add if correctly connected (+ terminal of one to - of next): ε_total = 2 + 3 + 4 = 9V. Internal resistances also add: r_total = 1 + 1.5 + 2 = 4.5Ω. This combination provides 9V EMF with 4.5Ω internal resistance.',
    difficulty: 'easy'
  },
  {
    id: 88,
    question_stem: 'Explain the potentiometer principle and how it measures EMF.',
    topic: 'Current Electricity',
    subtopic: 'Potentiometer',
    predicted_marks: 3,
    question_type: 'VSA',
    confidence_score: 80,
    answer_outline: ['Compares unknown EMF with standard cell', 'Null deflection method (no current from cell)', 'E₁/E₂ = L₁/L₂ (length ratio)', 'More accurate than voltmeter'],
    hint_phrases: ['comparison method', 'null point', 'no current method'],
    full_solution: 'Potentiometer uses null deflection method to avoid current from cell under test. Unknown EMF ε_x and standard cell ε_s connected to ends of resistance wire. Both connected to galvanometer at opposite junctions. Slide contact adjusted until galvanometer shows zero current. At this null point: ε_x/ε_s = L_x/L_s (length ratio). Accurate because no current flows from cells.',
    difficulty: 'medium'
  },
  {
    id: 89,
    question_stem: 'A resistor dissipates 100W when connected to 200V supply. What power is dissipated at 100V?',
    topic: 'Current Electricity',
    subtopic: 'Power and Resistance',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 94,
    answer_outline: ['P = V²/R', 'R = V²/P = (200)²/100 = 400Ω', 'At 100V: P\' = (100)²/400 = 25W'],
    hint_phrases: ['resistance constant', 'voltage squared', 'proportionality'],
    full_solution: 'At 200V: P = 100W, so R = V²/P = 40000/100 = 400Ω. At 100V (half voltage): P\' = (100)²/400 = 10000/400 = 25W. Power ∝ V² for constant resistance, so halving voltage reduces power to 1/4.',
    difficulty: 'easy'
  },
  {
    id: 90,
    question_stem: 'Explain why fuses are used in electrical circuits.',
    topic: 'Current Electricity',
    subtopic: 'Safety Devices',
    predicted_marks: 2,
    question_type: 'VSA',
    confidence_score: 87,
    answer_outline: ['Fuse melts when current exceeds limit', 'Breaks circuit, preventing damage', 'Protects equipment from overcurrent', 'Acts as safety device'],
    hint_phrases: ['thermal effect', 'I²R heating', 'breaking circuit'],
    full_solution: 'Fuse is wire with low melting point. When current exceeds rating, I²R heating melts fuse, breaking circuit. This prevents: excessive heating (fire hazard), damage to equipment, overheating of wires. Fuse rating chosen based on normal circuit current. If current doubles, I²R heating increases 4×, quickly melting fuse.',
    difficulty: 'easy'
  },

  // Additional chapters in next part...
]
