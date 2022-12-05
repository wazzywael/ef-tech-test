# React Exercise

### Goal
**The scope of the exercise** is using that data to render the layout in the "mock.png" design file and add a click event to the button that toggles the visibility of the Cards component.
When the user clicks on the button the cards should show or hide and  the text of the button should update accordingly.

The design provided is a flat png so you will not be able to find out exact measurements for fonts and layout. 
This is intentional as part of the task is also demonstrate a good eye for design. 

You can use any additional library you need.

> *Please note: Both the CSS and the React aspects are important in evaluating the code.*
---

### Process

* Step 1 - When the app first loads, fetch the data from this endpoint: https://cefcom-static-ctdev.s3.eu-west-1.amazonaws.com/test/2022/data.json.

The response will be a `page` object which includes an array of two `components`. One is of `componentType` "button: and  the other "cards". 

``` 
{
  "page": {
    "components": [
      {
        "componentType": "button",
        "buttonLabelShow": "Show cards",
        "buttonLabelHide": "Hide cards"
      },
      {
        "componentType": "cards",
        "title": "Our Language Courses",
        "description": "Whatever language or method of learning you prefer, EF can deliver.",
        "cards": [
          {
            "slug": "face-to-face",
            "code": "Face to face",
            "title": "Face-to-face courses",
            "description": "The modern approach to classroom teaching, our courses combine the best of face-to-face training with high-tech online learning tools.",
            "anchorText": "Learn more",
            "anchorUrl": "/",
            "image": "https://picsum.photos/420/260"
          },
          {
            "slug": "online-courses",
            "code": "Online courses",
            "title": "Online courses",
            "description": "Our online courses come in many flavors: from fully independent self-study classes to highly intensive private courses.",
            "anchorText": "Learn more",
            "anchorUrl": "/",
            "image": "https://picsum.photos/420/260"
          },
          {
            "slug": "study-abroad-courses",
            "code": "Study abroad courses",
            "title": "Study abroad courses",
            "description": "For urgent, specialized language training needs, an immersion course abroad is often the fastest way to progress.",
            "anchorText": "Learn more",
            "anchorUrl": "/",
            "image": "https://picsum.photos/420/260"
          }
        ]
      }
    ]
  }
}
```



* Step 2 - Render the Cards Component as per Design (mock.png) using the data you fetched. 

* Step 3 - Add a click event to the button to toggle the visibility of the Cards component section

---


### Available Scripts

In the project directory, you can run:

##### `npm start`

