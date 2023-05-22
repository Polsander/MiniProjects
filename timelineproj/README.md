
# Form Timeline Component

### Installation Steps:
1. `yarn`
2. `yarn dev`
3. Open application on localhost:5173

### Project Information

This repository is generally a collage of small projects which may evolve into something in the future. It's mostly for my personal learning and to build components or implement architecture which I think is useful.

This timeline component uses the most modern Redux state management tools (Redux Toolkit) available today in 2023. 

It is designed to be used as a reusable component that provides the user with a showing of steps and buttons to enhance the U.X. for filling out multiple screens of forms.

The reusability and simplicity of props that are passed also makes the developer's work easier. 

### Current Timeline Supports

1. Wrap your forms in the timeline component as a child.
2. Allow to skip to multiple sections of your form.
3. Submissions support sending data in any custom way you define. (Recommended to send data as an object from Redux store).

4. Buttons disable and enable based on which step the user is on. Timeline tracks which step the user is currently on.

### Future Timeline Supports
I want to add a validation feature where the timeline will support validation checking and prevent the user from submitting or progressing/skipping steps if a step before it fails validation.

## Goal of this Project

Ideally I want this timeline to be customizable enough to the point where I can upload it into a library and have it imported into projects.

## More To Come Soon (WIP)

This project is still a work in progress and requires many design changes on top of it as well as customizability. No deadlines in place, will work on it gradually and update this read me as time goes on.

Once ready for use, will release further instructions, code snippits, and examples on how to use the Timeline.