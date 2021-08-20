import "./App.css";
import Card from "./pricecard";
function App() {
  let details = [
    {
      packageName: "FREE",
      price: 0,
      currency: "$",
      period: "monthly",
      features: [
        {
          name: "Single User",
          isEnabled: true,
        },
        {
          name: "5GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: false,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: false,
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: false,
        },
        {
          name: "Free Subdomain",
          isEnabled: false,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    {
      packageName: "PLUS",
      price: 9,
      currency: "$",
      period: "monthly",
      features: [
        {
          name: "5 Users",
          isEnabled: true,
          isBold: true,
        },
        {
          name: "50GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: true,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          name: "Free Subdomain",
          isEnabled: true,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    {
      packageName: "PRO",
      price: 49,
      currency: "$",
      period: "yearly",
      features: [
        {
          name: "Unlimited Users",
          isEnabled: true,
        },
        {
          name: "150GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: true,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          name: "Free Subdomain",
          isEnabled: true,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: true,
        },
      ],
    },
  ];

  let onSubscribe = (plan) => {
    alert(`Hey ${plan} plan is subscribed`);
  };
  return (
    <div>
      <header>
      <nav class="navbar navbar-dark bg-primary ">
      <div class="container-fluid">
    <a class="navbar-brand" href="#">Pricing Page</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Free</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pro</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Plus</a>
        </li>
      </ul>
      
    </div>
  </div>
  
</nav>
      </header>
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            {details.map((card) => {
              return (
                <Card data={card} handleSubscribe={onSubscribe}>
                  {" "}
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
