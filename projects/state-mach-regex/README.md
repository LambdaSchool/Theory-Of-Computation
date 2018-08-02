# Project 

## State machines:

1. Draw out the state machine for a car's turn signal system. What are the
   transitions leading to both lights not blinking, one light blinking, the
   other light blinking, or both lights blinking?

## Regular Expressions

1. Write a regex to parse all links from a web page and print them:

```
curl https://stackoverflow.com > stackoverflow.html
node extractlinks.js stackoverflow.html
```

This command will produce all of the links from the StackOverflow main page in
this format:

      https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d
      http://ajax.googleapis.com/ajax/libs/query/1.12.4/jquery.min.js
      ...
      ...
      ...

You can find these links by searching for the `http` or `https` string with your
regex, or the `href=` string, or potentially many others. Remember to separate
the url from the double quotes `"` surrounding it.

2. Write a regex that accepts a phone number in any phone number format:

```
555-123-4567
5551234567
(555) 123-4567
555 123 4567
```

The output of any of these phone #s as input should be:

```
Area code: 555
Prefix: 123
Suffix: 4567
```

