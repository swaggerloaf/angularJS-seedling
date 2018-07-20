const counter = () => {
  return {
    scope: null,

    // directive does not create new scope so no inheritence going on`
    template: `
      <div class="card">
        <h3 class="card-title">Counter: {{count}} </h3>
      </div>
      <div>
      &nbsp;&nbsp;&nbsp;
			<a class="counter__increment" href="" ng-click="increment()">
				Increment main
			</a>
			<a class="counter__decrement" href="" ng-click="decrement()">
				Decrement Counter
      </a>
      </div>
    `
  }
};

export default counter;
