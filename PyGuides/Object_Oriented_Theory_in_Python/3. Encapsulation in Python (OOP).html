<h4><strong>Encapsulation: Hiding Information</strong></h4><p>Encapsulation is a mechanism that restricts direct access to objects’ data and methods. But at the same time, it facilitates operation on that data (objects’ methods).</p><blockquote><p>“Encapsulation can be used to hide data members and members function. Under this definition, encapsulation means that the internal representation of an object is generally hidden from view outside of the object’s definition.” — Wikipedia</p></blockquote><p>All internal representation of an object is hidden from the outside. Only the object can interact with its internal data.</p><p>First, we need to understand how <code>public</code> and <code>non-public</code> instance variables and methods work.</p><p><br></p><h4><strong>&gt; Public Instance Variables</strong></h4><p>For a Python class, we can initialize a <code>public instance variable</code> within our constructor method. Let’s see this:</p><p>Within the constructor method:</p><pre class="prettyprint linenums">class Person:
    def __init__(self, first_name):
        self.first_name = first_name</pre><p><br></p><p>Here we apply the <code>first_name</code> value as an argument to the <code>public instance variable</code>.  </p><pre class="prettyprint linenums">tk = Person('TK')
print(tk.first_name) # =&gt; TK</pre><p><br></p><p>Within the class:  </p><pre class="prettyprint linenums">class Person:
    first_name = 'TK'</pre><p><br></p><p>Here, we do not need to apply the <code>first_name</code> as an argument, and all instance objects will have a <code>class attribute</code> initialized with <code>TK</code>.  </p><pre class="prettyprint linenums">tk = Person()
print(tk.first_name) # =&gt; TK</pre><p><br></p><p>Cool. We have now learned that we can use <code>public instance variables</code> and <code>class attributes</code>. Another interesting thing about the <code>public</code> part is that we can manage the variable value. What do I mean by that? Our <code>object</code> can manage its variable value: <code>Get</code> and <code>Set</code> variable values.</p><p>Keeping the <code>Person</code> class in mind, we want to set another value to its <code>first_name</code> variable:</p><pre class="prettyprint linenums">tk = Person('TK')
tk.first_name = 'Kaio'
print(tk.first_name) # =&gt; Kaio</pre><p>Here we go. We just set another value (<code>kaio</code>) to the <code>first_name</code> instance variable and it updated the value. Simple as that. Since it’s a <code>public</code> variable, we can do that.</p><p><br></p><h4><strong>&gt; Non-public Instance Variable</strong></h4><blockquote><p>We don’t use the term “private” here, since no attribute is really private in Python (without a generally unnecessary amount of work). — PEP 8</p></blockquote><p>As the <code>public instance variable</code> , we can define the <code>non-public instance variable</code> both within the constructor method or within the class. The syntax difference is: for <code>non-public instance variables</code> , use an underscore (<code>_</code>) before the <code>variable</code> name.  </p><p>“‘Private’ instance variables that cannot be accessed except from inside an object don’t exist in Python. However, there is a convention that is followed by most Python code: a name prefixed with an underscore (e.g. <code>_spam</code>) should be treated as a non-public part of the API (whether it is a function, a method or a data member)” — Python Software Foundation</p><p>Here’s an example:</p><pre class="prettyprint linenums">class Person:
    def __init__(self, first_name, email):
        self.first_name = first_name
        self._email = email</pre><p><br></p><p>Did you see the <code>email</code> variable? This is how we define a <code>non-public variable</code> :  </p><pre class="prettyprint linenums">tk = Person('TK', 'tk@mail.com')
print(tk._email) # tk@mail.com</pre><p><br></p><blockquote><p>We can access and update it. <code><em>Non-public variables</em></code> are just a convention and should be treated as a non-public part of the API.</p></blockquote><p>So we use a method that allows us to do it inside our class definition. Let’s implement two methods (<code>email</code> and <code>update_email</code>) to understand it:</p><pre class="prettyprint linenums">class Person:
    def __init__(self, first_name, email):
        self.first_name = first_name
        self._email = email

    def update_email(self, new_email):
        self._email = new_email

    def email(self):
        return self._email</pre><p><br> Now we can update and access <code>non-public variables</code> using those methods. Let’s see:  </p><pre class="prettyprint linenums">tk = Person('TK', 'tk@mail.com')
print(tk.email()) # =&gt; tk@mail.com
tk._email = 'new_tk@mail.com'
print(tk.email()) # =&gt; tk@mail.com
tk.update_email('new_tk@mail.com')
print(tk.email()) # =&gt; new_tk@mail.com</pre><ol><li><p>We initiated a new object with <code>first_name</code> TK and <code>email</code> tk@mail.com</p></li><li><p>Printed the email by accessing the <code>non-public variable</code> with a method</p></li><li><p>Tried to set a new <code>email</code> out of our class</p></li><li><p>We need to treat <code>non-public variable</code> as <code>non-public</code> part of the API</p></li><li><p>Updated the <code>non-public variable</code> with our instance method</p></li><li><p>Success! We can update it inside our class with the helper method</p></li></ol><p><br></p><h4><strong>&gt; Public Method</strong></h4><p>With <code>public methods</code>, we can also use them out of our class:</p><pre class="prettyprint linenums">class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self._age = age

    def show_age(self):
        return self._age</pre><p>Let’s test it:  </p><pre class="prettyprint linenums">tk = Person('TK', 25)
print(tk.show_age()) # =&gt; 25</pre><p>Great — we can use it without any problem.</p><p><br></p><h4><strong>&gt; Non-public Method</strong></h4><p>But with <code>non-public methods</code> we aren’t able to do it. Let’s implement the same <code>Person</code> class, but now with a <code>show_age</code> <code>non-public method</code> using an underscore (<code>_</code>).</p><pre class="prettyprint linenums">class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self._age = age

    def _show_age(self):
        return self._age</pre><p><br></p><p>And now, we’ll try to call this <code>non-public method</code> with our object:  </p><pre class="prettyprint linenums">tk = Person('TK', 25)
print(tk._show_age()) # =&gt; 25</pre><blockquote><p>We can access and update it. <code><em>Non-public methods</em></code> are just a convention and should be treated as a non-public part of the API.</p></blockquote><p>Here’s an example for how we can use it:</p><pre class="prettyprint linenums">class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self._age = age

    def show_age(self):
        return self._get_age()

    def _get_age(self):
        return self._age

tk = Person('TK', 25)
print(tk.show_age()) # =&gt; 25</pre><p><br></p><p>Here we have a <code>_get_age</code> <code>non-public method</code> and a <code>show_age</code> <code>public method</code>. The <code>show_age</code> can be used by our object (out of our class) and the <code>_get_age</code> only used inside our class definition (inside <code>show_age</code> method). But again: as a matter of convention.</p><p><br></p><h4><strong>Encapsulation Summary</strong></h4><p>With encapsulation we can ensure that the internal representation of the object is hidden from the outside.</p>