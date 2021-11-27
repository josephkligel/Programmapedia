# Artificial Intelligence Reference Documentation
Documentation listing my comprehension of Artificial Intelligence
From this point on the A.I. will be designated as the agent.

## Plan vs. Policy
A plan is when you know exactly what you need to do next.

## Markov Process 
Deterministic Approach. It doesn't matter how the AI got to the state.
Only, that the AI is there. The future is determined by the actions the AI makes based on the state
it occupies. The prime state, ultimate goal, is known
-Uses Bellman Equation

## Markov Decision Process(MDP)
Non-deterministic/Stochastic Approach. The AI uses a mathematical framework to determine what action to make, 
but the environment contains randomness. The prime state and ultimate goal is not known.
-Uses The Adjusted Bellman Equation

## Living Penalty
The penalty given for each action. It could be set to 0 or -0.04, for example. Everytime, the agent moves -0.04
points are deducted

## Bellman Equation
### Equation
The Bellman Equation(BE): V(s) = max(R(s, a) + ΓV(s'))
#### Breakdown
	s: state - The state of the position the AI is in, e.g. V = 1
	a: action - The action or movement an AI can make, e.g. left, right, or down movement in a maze.
	s': prime state - The next state after an action is made, e.g. left+1, right+1, or down+1.
	R: Reward of state and actions
	V: the value - The value is used for reinforcement learning, e.g. -1 is bad but +1 is great.
	Γ: the discount a.k.a. probability - discounts the prime state by a given factor, e.g. 0.9(V=1)
	max: Maximum of all possible actions

## Advanced Bellman Equation
### Equation
The Advanced Bellman Equation(ABE): V(s) = max(R(s, a) + ΣP(s,a,s')*V(s'))
#### Breakdown
	s, a, s', V, Γ, R, max: Same as BE
	P: The probability of something
	ΣP(s,a,s') a.k.a ΣΓV(s'): ΓV(s'1+s'2+s'3), e.g. 0.8*(s'UP) + 0.1*(s'LEFT) + 0.1(s'RIGHT)
	 -The sum of the probabilities of the actions and states

## Q-Learning Equation
### Equation
Q-learning Equation: Q(s, a) = max(R(s,a) + ΣP(s,a,s')*Q(s')) or Q(s,a) = R(s,a)+ΓmaxQ(s',a')
#### Breakdown
	Same legend as the Bellman Equations
	All this equation represents is what the agent learned in a random environment
## Temporal Difference
### Equations
Temporal Difference Equation: TD(a,s) = R(s,a) + ΓmaxQ(s',a') - Q[t-1](a,s) 
Continually updating Q-Learning Equation: The equation will cease updating when the environment is predictable
	-Q[t](s,a) = Q[t-1](s,a)+alpha*TD[t](a,s), or
	-Q[t](s,a) = Q[t-1](s,a) + alpha*(R(s,a) + ΓmaxQ(s',a') - Q[t-1](a,s))
#### Breakdown
	t-1: Previous time period
	t: current time period
	alpha: the agent's learning rate. Usually between 0 and 1

## Deep Q-Learning
Deep QL involves neural networks, and the neural networks compare Q-Learning values to previous targets.
The comparison is knowna as a loss and is then fed back through the neural network to develop a more robust
policy. The closer to 0 the loss is the more confident the agent is in the policy (just as it is for normal QL). 
### Equation
Equation: L = Σ(Q[Target]-Q)^2
#### Breakdown
	Q[Target]:

## Deep Q-Action
The final Q values derived from DQL are filtered through what is called a softmax. The softmax choose the best
Q value result from the choices given and the agent then chooses an action to apply.

## Experience Replay

## Action Selection Policies
Different action selection policies exist to better manipulate the agent's reponses in the environment. An 
agent can get stuck in a local maximum state, which is when it acquires the highest award despite the potential 
of a more efficient action. This local maximum state is not entirely  beneficial as it does not exploit the best of all options.
Therefore, tweaks where the action policy weighs actions differently instead of choosing a maximumally rewarded
action are implemented. For example, an agent may be programmed to choose a completely different action from the
most plausible one in order for it to continue learning and developing the best policy.
