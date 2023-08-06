for (let i = 0; i <= 50; i++) {
  //   console.log(i);
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fooBar");
  } else if (i % 5 === 0) {
    console.log("Bar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else {
    console.log(i);
  }
}
/* 
foo
1
2
foo
4
Bar
foo
7
8
foo
Bar
11
foo
13
14
foo
16
17
foo
19
Bar
foo
22
23
foo
Bar
26
foo
28
29
foo
31
32
foo
34
Bar
foo
37
38
foo
Bar
41
foo
43
44
foo
46
47
foo
49
Bar */
