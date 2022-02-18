# Interview Coding Base

Hi there!

Looks like you already nailed the first part of this challenge - finding this repo. This repo contains everything you need to take our take-home assignment.

Our product is all about helping content creators to soundtrack their stories. Part of this is making it easy for users to save music that they like. Your job is to build a playlist feature to solve this.

To help you get started we have set up an application that gets some of our top tracks from a database and displays them on a page. You can then extend upon this application as you see fit to build your feature.

## The project
Below, we have defined what is required of your project, since we believe this will serve as a good basis for you to show your problem solving skills and describe your reasoning and decisions.

- Create, delete and list playlists
- Add and remove tracks to a playlist

If you want to add extra features or explore something you’re passionate about, we encourage you to do so, but we want to point out that we’re not evaluating you on the amount of time you have to spend on an assignment like this.

If you do want to extend upon the list above, there is more data returned from the API than what's being currently displayed.

Some inspiration on extra features:
- Reorder tracks in playlist
- Filter and sorting of tracks
- Display waveforms
- Users and permissions

Again, this is not required. We respect that everyone has different amounts of time to put on something like this and we evaluate accordingly.

### Prerequisites for running

- Docker installed
- You will need to have the following ports free:
  - `3000` (client)
  - `8000` (service)
  - `5432` (postgres)

### Instructions
1. Clone repository
2. Setup a new private repository with the source code
3. Run `docker-compose up`
4. Code
5. Push your solution to a new branch
6. Create a Pull Request when your ready and reach out to us for setting up the interview

To cleanup the Docker containers run `docker-compose down -v --rmi all --remove-orphans`

## FAQ
#### How will I be evaluated?
You bring in your solution and get to walk it through with us. We use this as a starting point to have discussion. We want to understand your reasoning and depth of knowledge. As a rule the discussion is more important than the actual code. Also no one is an expert at everything so this also helps us understand your strengths as well as areas of improvement across the stack.

Some of the things we will look at in the evaluation:
- **Code quality** - How you reason about making sure code is readable and maintainable.
- **Testing** - How you reason about what to test and how to test it.
- **Performance** - How you can identify performance bottlenecks and reason around solving them.
- **System design** - How you reason about concepts like reusability, separation of concerns and various abstractions.
- **Infrastructure and operations** - How you would run a system and what's important to think about.

In this we also try to understand how you solve problems generally and how you communicate your solutions. Problem solving and communication are both things we value highly.

#### Why did you pick this stack?
This is the stack that the majority of our platform is written in. We definitely don't require you to be an expert in this stack and we are more interested in your knowledge of building web applications in general.

#### Can I change things in the existing code?
Yes please! We would love to hear what you think are some of the things that we can do better.

#### Can I use additional libraries/frameworks?
You're free to use whatever you want. The important thing is that you can explain why you made the decision. We would recommend sticking to the basic stack however (Django + React).

### What if I get stuck?
Don’t worry! Reach out to your contact at Epidemic Sound and we’ll help unblock you!
