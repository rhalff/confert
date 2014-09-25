Confert
=======

Require and convert config files of any type

This module serves a very simple purpose, it loads a config fileaA

As a bonus you can leave it up to the user of your program what type
of config file to use.

## Installation
```
$ npm install confert
```

## Usage
```javascript
var config = require('confert')('my_config');
```

This will look for the following files config.json, config.ini, config.xml

If you already know what the config type is, you can load these modules directly.
```javascript
var config = require('confert/yaml')('my_config');
var config = require('confert/ini')('my_config');
var config = require('confert/xml')('my_config');
```

But it takes away the flexibility of absorbing any config file.

### Options object

Right now only the xml module receives some options, these are directly taken
from xml2json:

```javascript
// Default values:
var options = {
  sanitize: true,
  trim: true
};

// Tries to load any extension, might .xml be found those options will be used.
var config = require('confert')('my_config', options);

```

For XML the root element is required, yet the name is always ignored.

### Example Configurations:

#### XML:
```xml
<config>
  <scope>global</scope>
  <database>
    <user>dbuser</user>
    <password>dbpassword</password>
    <name>test</name>
  </database>
  <paths>
    <default>
      <datadir>/var/lib/data</datadir>
      <array>first value</array>
      <array>second value</array>
      <array>third value</array>
    </default>
  </paths>
</config>
```

#### YAML:
```coffee
---
scope: global
database:
  user: dbuser
  password: dbpassword
  name: test
paths:
  default:
    datadir: /var/lib/data
    array:
      - 'first value'
      - 'second value'
      - 'third value'
```

#### INI:
```ini
; this comment is being ignored
scope = global

[database]
user = dbuser
password = dbpassword
name = test

[paths.default]
datadir = /var/lib/data
array[] = first value
array[] = second value
array[] = third value
```

All of the above will produce the exact same data structure:

#### Required Result
```json
{
  "scope": "global",
  "database": {
    "user": "dbuser",
    "password": "dbpassword",
    "name": "test"
  },
  "paths": {
    "default": {
      "datadir": "/var/lib/data",
      "array": [
        "first value",
        "second value",
        "third value"
      ]
    }
  }
}
```

## License
(The MIT License)

Copyright 2014 Rob Halff. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
