# Course info Part 2

## 2.1: Course information step6

Let's finish the code for rendering course contents from exercises 1.1 - 1.5. You can start with the code from the model answers. The model answers for part 1 can be found by going to the submission system, click on my submissions at the top, and in the row corresponding to part 1 under the solutions column click on show. To see the solution to the course info exercise, click on index.js under kurssitiedot ("kurssitiedot" means "course info").

Note that if you copy a project from one place to another, you might have to delete the node_modules directory and install the dependencies again with the command npm install before you can start the application. Generally, it's not recommended that you copy a project's whole contents and/or add the node_modules directory to the version control system.

Let's change the App component like so:

```js

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

```

Define a component responsible for formatting a single course called Course.

The component structure of the application can be, for example, the following:

```

App
  Course
    Header
    Content
      Part
      Part
      ...
      
```
Hence, the Course component contains the components defined in the previous part, which are responsible for rendering the course name and its parts.

The rendered page can, for example, look as follows:


![The rendered page can, for example, look as follows:](https://user-images.githubusercontent.com/33107568/97231032-8f0de680-17e3-11eb-87a0-feeb705b2ce1.png)


You don't need the sum of the exercises yet.

The application must work regardless of the number of parts a course has, so make sure the application works if you add or remove parts of a course.

Ensure that the console shows no errors!

## 2.2: Course information step7

Show also the sum of the exercises of the course.


![Show also the sum of the exercises of the course](https://user-images.githubusercontent.com/33107568/97232707-558aaa80-17e6-11eb-8a15-b6feaa01965b.png)


## 2.3*: Course information step8

If you haven't done so already, calculate the sum of exercises with the array method reduce.

Pro tip: when your code looks as follows:
```js

const total = 
  parts.reduce((s, p) => someMagicHere)
  
 ```
and does not work, it's worth to use console.log, which requires the arrow function to be written in its longer form:

```js

const total = parts.reduce((s, p) => {
  console.log('what is happening', s, p)
  return someMagicHere 
})

```

## 2.4: Course information step9

Let's extend our application to allow for an arbitrary number of courses:

```js

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      // ...
    </div>
  )
}

```

The application can, for example, look like this:


![image](https://user-images.githubusercontent.com/33107568/97233040-f11c1b00-17e6-11eb-9eb7-eeac48df7cd1.png)


## 2.5: separate module

Declare the Course component as a separate module, which is imported by the App component. You can include all subcomponents of the course into the same module.
