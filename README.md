# RNDemoApp

Mostly for my daughter Keira :)

## Getting Started

* `git clone`
* `cd RNDemoApp`
* `yarn`
* `yarn start`

## Some Things

To get react-navigation to work as explained in the [docs](https://reactnavigation.org/docs/en/hello-react-navigation.html)
I had to switch from the expo init generated style of:

```js
export default function HomeScreen() {
  return (
    <View>...</View>
  )
}
```

To the more classic (and documented)

```js
class HomeScreen extends React.Component {
  render () {
    return (
      <View>...</View>
    );
  }
}

export default HomeScreen
```

When moving to a class that extends React.Component you have to add `render() { }` around `return()`.
