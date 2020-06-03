<h4><strong>Inheritance: Behaviors and Characteristics</strong></h4><p>Certain objects have some things in common: their behavior and characteristics.</p><p>For example, I inherited some characteristics and behaviors from my father. I inherited his eyes and hair as characteristics, and his impatience and introversion as behaviors.</p><p>In object-oriented programming, classes can inherit common characteristics (data) and behavior (methods) from another class.</p><p>Let’s see another example and implement it in Python.</p><p>Imagine a car. Number of wheels, seating capacity and maximum velocity are all attributes of a car. We can say that an<em> </em><strong>ElectricCar </strong>class inherits these same attributes from the regular <strong>Car</strong> class.</p><pre class="prettyprint linenums">class Car:
    def __init__(self, number_of_wheels, seating_capacity, maximum_velocity):
        self.number_of_wheels = number_of_wheels
        self.seating_capacity = seating_capacity
        self.maximum_velocity = maximum_velocity</pre><p><br></p><p>Our <strong>Car</strong> class implemented:  </p><pre class="prettyprint linenums">my_car = Car(4, 5, 250)
print(my_car.number_of_wheels)
print(my_car.seating_capacity)
print(my_car.maximum_velocity)</pre><p><br></p><p>Once initiated, we can use all <code>instance variables</code> created. Nice.</p><p>In Python, we apply a <code>parent class</code> to the <code>child class</code> as a parameter. An <strong>ElectricCar</strong> class can inherit from our <strong>Car</strong> class.</p><pre class="prettyprint linenums">class ElectricCar(Car):
    def __init__(self, number_of_wheels, seating_capacity, maximum_velocity):
        Car.__init__(self, number_of_wheels, seating_capacity, maximum_velocity)</pre><p><br></p><p>Simple as that. We don’t need to implement any other method, because this class already has it (inherited from <strong>Car</strong> class). Let’s prove it:  </p><pre class="prettyprint linenums">my_electric_car = ElectricCar(4, 5, 250)
print(my_electric_car.number_of_wheels) # =&gt; 4
print(my_electric_car.seating_capacity) # =&gt; 5
print(my_electric_car.maximum_velocity) # =&gt; 250</pre><p><br></p><p>That’s it!</p><p>We learnt a lot of things about Python object oriented programming:</p><ul><li><p>Encapsulation: hiding information</p></li><li><p>Inheritance: behaviors and characteristics</p></li></ul>