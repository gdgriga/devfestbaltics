+++
title = "{{ replace .Name "-" " " | title }}"
date = {{ .Date }}
draft = true
outputs = ["html", "json"]

# All information about speaker
name = "{{ replace .Name "-" " " | title }}"
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
  url = "https://github.com/<username>"

[[social]]
  type = "twitter"
  url = "https://twitter.com/<username>"

[[social]]
  type = "facebook"
  url = "https://facebook.com/<username>"

[[social]]
  type = "instagram"
  url = "https://instragram.com/<username>"

[[social]]
  type = "linkedin"
  url = "linkedin.com/in/<username>"

+++

Some bio here about the speaker. Use your fantasy and **some** _power_ of Makrdown
