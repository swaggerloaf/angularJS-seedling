const counter = function() {
  return {
    scope: null,
    // directive does not create new scope so no inheritence going on`
    template: `
      <div class="card">
        <h3 class="card-title">Counter wanna: {{counter.count}} </h3>
      </div>
      {{counter.name1}}
      <div>
      &nbsp;&nbsp;&nbsp;
			<a class="counter__increment" href="" ng-click="counter.increment()">
				Increment Counter
			</a>
			<a class="counter__decrement" href="" ng-click="counter.decrement()">
				Decrement Counter
      </a>
      </div>
    `
  }
};

export default counter;
