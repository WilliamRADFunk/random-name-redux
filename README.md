# random-name-redux

This library was originally created Dominic Tarr as "random-name", but the library appears abandoned with open pull requests from 3 years ago. I needed one of those pull requests, so I revived this library, applied Shawn Van Ittersum's pull request change, and here is the new version of the library.

Notes about the old implementation:

random.first() produces only female names
random.middle() produces only male names

...use that information accordingly.

``` js
  var random = require('random-name-redux')
  console.log(random())

  //provides first, middle, and last names.

  console.log(random.first())
  console.log(random.middle())
  console.log(random.last())

  //also, random place name!
  console.log(random.place())
  
```

Taken from the [Moby Word List by Gary Ward](http://www.gutenberg.org/ebooks/3201)

## License

MIT
