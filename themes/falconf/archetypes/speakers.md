+++
title = "{{ replace .Name "-" " " | title }}"
date = {{ .Date }}
draft = true
outputs = ["html", "json"]

# All information about speaker
name = "{{ replace .Name "-" " " | title }}"
shortDescription = ""
pictureURL = "/images/speakers/{{ .Name }}.jpg"
country = "" # !!! ISO Alpha-2 code (Example: UK)
company = "" # !!! Check that this company is in data/companies.json

# Show him on the first page or not
featured = false

# Available tags: ["android", "kotlin", "ux", "ios", ""]
tags = []

# Remove any that not applies
[[social]]
  type = "github"
  display = ""
  url = "https://github.com/<username>"

[[social]]
  type = "twitter"
  display = ""
  url = "https://twitter.com/<username>"

[[social]]
  type = "facebook"
  display = ""
  url = "https://facebook.com/<username>"

[[social]]
  type = "instagram"
  display = ""
  url = "https://instragram.com/<username>"

[[social]]
  type = "linkedin"
  display = ""
  url = "linkedin.com/in/<username>"

+++

Some bio here about the speaker. Use your fantasy and **some** _power_ of Makrdown
