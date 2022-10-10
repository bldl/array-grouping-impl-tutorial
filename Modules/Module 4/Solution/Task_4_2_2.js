
assert.throws(TypeError, function() {
    [].group(null)
  }, "null callback throws TypeError");