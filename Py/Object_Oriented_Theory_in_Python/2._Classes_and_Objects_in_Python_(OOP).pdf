<p><strong>Objects</strong> are a representation of the real world objects like cars, dogs, bike, etc. The objects share two main characteristics: <em>data</em> and <em>behavior</em>.</p><p>Cars have <strong><em>data</em></strong> like number of wheels, number of doors, seating capacity and also have <strong><em>behavior</em></strong>: accelerate, stop, show how much fuel is missing and so many other.</p><p>We call <em>data</em> as <strong><em>attributes</em></strong> and <em>behavior</em> as <strong><em>methods</em></strong> in object oriented programming. Again:</p><p>Data → Attributes &amp; Behavior → Methods</p><p>And a <strong>Class</strong> is the blueprint from which individual objects are created. In the real world we often find many objects with all the same type. Like cars. All the same make and model (have an engine, wheels, doors, …). Each car was built from the same set of blueprints and has the same components.</p><p>Python as an Object Oriented programming language has these concepts: <strong><em>class</em></strong> &amp; <strong><em>object</em></strong>.</p><blockquote><p>A class is a blueprint, a model for its objects.</p></blockquote><p>So again, a class it is just a model, a way to define <strong><em>attributes</em></strong> and <strong><em>behavior</em></strong> (as we talk in the <strong><em>theory section</em></strong>). As an example, a Vehicle <strong><em>class</em></strong> has its own <strong><em>attributes</em></strong> that defines what is a Vehicle <strong>object</strong>. Number of wheels, type of tank, seating capacity and maximum velocity are all attributes of a vehicle.</p><p>With this in mind, let’s understand Python syntax for classes:</p><pre class="prettyprint linenums">class Vehicle:
    pass</pre><p><br></p><p>We define classes with <strong><em>class statement</em></strong> and that’s it. Easy!<br>And objects are instances of a class. We create an instance by calling the class.</p><pre class="prettyprint linenums">car = Vehicle()
print(car) # &lt;__main__.Vehicle instance at 0x7fb1de6c2638&gt;</pre><p><br></p><p>Here <code>car</code> is an <strong><em>object</em></strong> (or instance) of the <strong><em>class</em></strong> <code>Vehicle</code>.</p><blockquote><p>“A car is a instance of the class of objects known as vehicles.”</p></blockquote><p>Remember that our Vehicle <strong><em>class</em></strong> has 4 <strong><em>attributes</em></strong>: Number of wheels, type of tank, seating capacity and maximum velocity. We set all this <strong><em>attributes</em></strong> when creating a vehicle <strong><em>object</em></strong>. So here we define our <strong><em>class</em></strong> to receive data when instantiates it.  </p><pre class="prettyprint linenums">class Vehicle:
    def __init__(self, number_of_wheels, type_of_tank, seating_capacity, maximum_velocity):
        self.number_of_wheels = number_of_wheels
        self.type_of_tank = type_of_tank
        self.seating_capacity = seating_capacity
        self.maximum_velocity = maximum_velocity</pre><p><br></p><p>We use the <code>init</code> <strong><em>method</em></strong>. We call it a constructor <strong><em>method</em></strong>. So when create the vehicle <strong><em>object</em></strong>, we can define this <strong><em>attributes</em></strong>. Imagine that we love the <strong>Tesla Model S</strong> and we want to create this kind of <strong><em>object</em></strong>. It has 4 wheels, it is an electric car so the tank’s type is electric energy, it has space for 5 seats and the maximum velocity is 250km/hour (155 mph). Let’s create this <strong><em>object</em></strong>! :)  </p><pre class="prettyprint linenums">tesla_model_s = Vehicle(4, 'electric', 5, 250)</pre><p><br></p><p>4 wheels + Electric type of tank + 5 seats + 250km/hour maximum speed.</p><p>All attributes set. But how can we access this attributes values? We <em>send a message to the object asking about them</em>. We call it a <strong><em>method</em></strong>. It’s the <strong><em>object</em></strong>’s <strong><em>behavior</em></strong>. Let’s implement it!</p><pre class="prettyprint linenums">class Vehicle:
    def __init__(self, number_of_wheels, type_of_tank, seating_capacity, maximum_velocity):
        self.number_of_wheels = number_of_wheels
        self.type_of_tank = type_of_tank
        self.seating_capacity = seating_capacity
        self.maximum_velocity = maximum_velocity

    def number_of_wheels(self):
        return self.number_of_wheels

    def set_number_of_wheels(self, number):
        self.number_of_wheels = number</pre><p><br></p><p>This is an implementation of two methods: <strong><em>number_of_wheels</em></strong> and <strong><em>set_number_of_wheels</em></strong>. We call it <code>getter</code> &amp; <code>setter</code>. Because the first get the attribute value, and the second set a new value for the attribute.</p><p>In Python, we can do that using <code>@property</code> (<code>decorators</code>) to define <code>getter</code>and <code>setters</code>. Let’s see it with code!</p><pre class="prettyprint linenums">class Vehicle:
    def __init__(self, number_of_wheels, type_of_tank, seating_capacity, maximum_velocity):
        self.number_of_wheels = number_of_wheels
        self.type_of_tank = type_of_tank
        self.seating_capacity = seating_capacity
        self.maximum_velocity = maximum_velocity

    @property
    def number_of_wheels(self):
        return self.number_of_wheels

    @number_of_wheels.setter
    def number_of_wheels(self, number):
        self.number_of_wheels = number</pre><p><br></p><p>And we can use this methods as attributes:  </p><pre class="prettyprint linenums">tesla_model_s = Vehicle(4, 'electric', 5, 250)
print(tesla_model_s.number_of_wheels) # 4
tesla_model_s.number_of_wheels = 2 # setting number of wheels to 2
print(tesla_model_s.number_of_wheels) # 2</pre><p><br></p><p>This is slightly different than defining methods. The methods work as attributes. For example, when we set the new number of wheels, we don’t pass 2 as parameter, but set the value 2 to <code>number_of_wheels</code>. This is one way to write <code>pythonic</code> <code>getter</code> and <code>setter</code> code.</p><p>But we can also use methods to other things like “<strong><em>make_noise</em></strong>” method. Let’s see it!</p><pre class="prettyprint linenums">class Vehicle:
    def __init__(self, number_of_wheels, type_of_tank, seating_capacity, maximum_velocity):
        self.number_of_wheels = number_of_wheels
        self.type_of_tank = type_of_tank
        self.seating_capacity = seating_capacity
        self.maximum_velocity = maximum_velocity

    def make_noise(self):
        print('VRUUUUUUUM')</pre><p><br></p><p>When we call this method, it just returns a string <strong><em>“VRRRRUUUUM”</em></strong>.</p><pre class="prettyprint linenums">tesla_model_s = Vehicle(4, 'electric', 5, 250)
tesla_model_s.make_noise() # VRUUUUUUUM</pre><p><br></p><p><strong>That’s it!</strong></p><p>We learnt a lot of things about Python object oriented programming:</p><ul><li><p>Objects &amp; Classes</p></li><li><p>Attributes as objects’ data</p></li><li><p>Methods as objects’ behavior</p></li><li><p>Using Python getters and setters &amp; property decorator</p></li></ul>