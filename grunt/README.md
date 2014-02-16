# The `grunt/` Directory

##Overview
```
grunt/
  |- aliases.js
  |- %task%.js
  |
```

The `grunt/` directory houses the Grunt tasks that needs to be configured for
the project. The `load-grunt-config` plugin reads this directory and creates
a Gruntfile config automatically by importing all the tasks that are conffigured
in this directory. 

Each task will have its own `<task>.js` file describing the configuration 
required to run the task.

`aliases.js` defines the task aliases/custom tasks specific for the project.

Currently the following tasks have been configured:
```
# builds the project
$ grunt build

# compiles the built project
$ grunt compile

# serves the built project at http://localhost:9000
$ grunt server

# generates a HTML report of test coverage and serves at http://localhost:9001
$ grunt coverage

#generates a converage report and dumps it on the command line.
$ grunt coverage-text

```

Type `grunt --help` to see what other tasks are supported by the configuration.
