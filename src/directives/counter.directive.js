const counter = function() {
  return {
    scope: null,
    // directive does not create new scope so no inheritence going on`
    template: `
      <div class="card">
        <h3 class="card-title">Counter wanna: {{main.count}} </h3>
      </div>
      {{main.name1}}
      <div>
      &nbsp;&nbsp;&nbsp;
			<a class="counter__increment" href="" ng-click="main.increment()">
				Increment main
			</a>
			<a class="counter__decrement" href="" ng-click="main.decrement()">
				Decrement Counter
      </a>
      </div>
    `
  }
};

export default counter;
