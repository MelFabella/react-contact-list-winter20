QUICK INTRO TO LIFECYCLE METHODS
LIFECYCLE METHODS WILL ALWAYS RENDER
* WILL BE REPLACE/NO LONGER IN USE

Logical Component ( Stateful Component )
  do logic
  state
  Lifecycle Methods
    call back functions
    mounting
      rendering a component a page
  class

LifeCycle methods
Callbacks functions
Mounting
  - rendering a component / mounting
Props change
State change

Initialization: (Component is rendered for the first time)
    *compnentWillMount()
    render()
    compnentDidMount() [WILL MOSTLY USE]

State changes: (State changes can cause lifecycle hooks to run)
  shouldComponentUpdate()
  *componentWillUpdate()
  render()
  componentDidUpdate()

Props changes: (A component receiving new props will trigger lifecycle hooks)
  *componentwillReceiveProps()
  shouldComponentUpdate()
  *componentWillUpdate()
  render()
  componentDidUpdate()

Unmounting
  componentWillUnmount()

  componentDidMount() {
    this.setState({ todos: ['eat breakfast']})
  }

  componentDidMount() {
    // grab the todos db
    this.setState({ todos: [..db] })
  }

GONE IN REACT 17:
  componetWillMount
  componentWillRecieveProps
  componentWillUpdate

New in React 17:
  UNSAFE_componentWillMount
  UNSAFE_componentWillRecieveProps
  UNSAFE_componentWillUpdate
  getDerivedstateFromProps
  getsnapshotBeforeUpdate