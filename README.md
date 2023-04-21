# LSERSA Website Re-build

*(2023 edition)*

This is currently a Work In Progress but should (eventually) form a replacement to the current sprawling / unwieldy [LSERSA website](http://lsersa.org).

Issues that I have with the current website:
* built using Bootstrap styles
* hand-coded, reasonably difficuly to maintain
* has a **load** of content that is parked as "archive" (using a previous style to boot) that
  I would like to either lose or incorporate into the main site
* re-design dates from 2017 &mdash; 6 years ago &mdash; and could do with a refresh

My preference is to use a SSG to try and ease the longer-term maintenance; ideally this will
mean hosting on Netlify with some redirects (in the same way as for the Bowles website) but
that is less important to me than just getting everything updated.

## Progress
- [x] use Delegate website as starter for basic structure
- [ ] examine **every** section of imported SCSS to ensure it's relevant
- [x] get theme colours set up
- [x] work out how to deal with a sidebar, what content goes there (currently it's sponsors
      and social media &mdash; is that enough to warrant a sidebar?)
- [ ] what content do we want added? school outreach? getting interested in skiing? our
      actual current policies?
- [x] sort out favicon

## Detail list
- [ ] check `_common_elements.scss` for relevance
- [ ] check `normalize.css` for relevance
- [x] check `_fonts.scss` for relevance
- [x] check whether we want to retain  fixed footer (`_footer_fix.scss`)
- [ ] check `_homepage.scss` for relevance
- [x] rewrite `_layout.scss` to suit
- [x] check what `_logo.scss` is used for, relevance etc
- [x] rewrite `_navbar.scss` to suit
- [ ] consier putting sponsor logos on the homepage into panels / cards?
- [ ] historic London races, check links
- [ ] races pre-2017
- [x] brand in navbar
- [ ] committee &amp; minutes
- [x] race page: add all the detail ...


## Generally
- [ ] front page, what else can we add?
- [ ] about page, what else can we add, detail around what training we do through the year?
- [ ] possibly add training booking ... this could be a big ask **but** would drive lots of traffic
- [ ] bring over minutes and the like (probably do this through another data cascade)
- [ ] round out all the races back to 1998 (through the data cascade + lots of resources)
- [x] anything else to add on the archive race pages?
- [ ] add committee
- [ ] add policies (this is a piece of work in itself)
- [ ] add regional clubs; regional slopes (would like this to have some graphics ...)
- [ ] look at the London races page (limited wish for this but need to retain key info)
- [ ] add race-day timings to the race page

## Notes

### Hero Images

Use the `layouts/hero.njk` layout to design a page with a hero image (and associated
sponsors carousel on wider screens). You can pass the following frontmatters:

```
hero_text: 'WELCOME<br>TO LSERSA'
hero_url: './src/img/hero/hero_tri_2018.png'
hero_alt: 'LSERSA racers at the 2018 Tri-Regional competition'
hero_shade: 'rgba(0,0,0,0.2)'
hero_text_color: '#fff'
```

(Above are the defaults if property is not passed.)

New hero images should be in a 5x2 ratio and at least 2000px on the longer side (you
can put larger files into the `src/img/hero` folder, appropriate-size images are
generated automatically).

### Sponsor Images

Sponsor images should be in 3:4 ratio with a transparent background, and at least 400px wide.

