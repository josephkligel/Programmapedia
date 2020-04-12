# Aritificial Intelligence Reference Documentation

## Markov Process 
Determinsitic Approach. It doesn't matter how the AI got to the state.
Only, that the AI is there. The future is determined by the actions the AI makes based on the state
it occupies. The prime state, ultimate goal, is known
-Uses Bellman Equation

## Markov Decision Process(MDP)
Non-deterministic Approach. The AI uses a mathematical framework to determine what action to make, 
but the environment contains randomness. The prime state and ultimate goal is not known.
-Uses The Adjusted Bellman Equation

## Bellman Equation
The Bellman Equation(BE): V(s) = max(R(s, a) + ΓV(s'))
### Breakdown
	s: state - The state of the position the AI is in, e.g. V = 1
	a: action - The action or movement an AI can make, e.g. left, right, or down movement in a maze.
	s': prime state - The next state after an action is made, e.g. left+1, right+1, or down+1.
	R: Reward of state and actions
	V: the value - The value is used for reinforcement learning, e.g. -1 is bad but +1 is great.
	Γ: the dicount a.k.a. probability - discounts the prime state by a given factor, e.g. 0.9(V=1)
	max: Maximum of all possible actions

## Adjusted Bellman Equation
The Adjusted Bellman Equation(ABE): V(s) = max(R(s, a) + ΣP(s,a,s')*V(s'))
### Breakdown
	s, a, s', V, Γ, R, max: Same as BE
	P: The probability of something
	ΣP(s,a,s') a.k.a ΣΓV(s'): ΓV(s'1+s'2+s'3), e.g. 0.8*(s'UP) + 0.1*(s'LEFT) + 0.1(s'RIGHT)
		The sum of the probabilities of the actions and states
