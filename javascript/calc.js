document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  console.log("loading event listenr...");

  loadValues();

  document.querySelectorAll('input').forEach(item => {
    item.addEventListener('blur', event => {
		calcTotals(event);
    })
  })

  document.querySelectorAll('textarea').forEach(item => {
    item.addEventListener('blur', event => {
    storeValues(event);
    })
  })

    calcTotals();

});

function loadValues() {
  loadWeek("#week-1");
  loadWeek("#week-2");
  loadWeek("#week-3");
  loadWeek("#week-4");
  loadWeek("#week-5");
  loadWeek("#week-6");
  loadWeek("#week-7");
  loadWeek("#week-8");
  loadWeek("#week-9");
  loadWeek("#week-10");
}

function storeValues(event) {
  storeWeek("#week-1");
  storeWeek("#week-2");
  storeWeek("#week-3");
  storeWeek("#week-4");
  storeWeek("#week-5");
  storeWeek("#week-6");
  storeWeek("#week-7");
  storeWeek("#week-8");
  storeWeek("#week-9");
  storeWeek("#week-10");
}

function calcTotals(event) {
    console.log("calc totals...");

    let chart_data = {}
    let week1_total = calcWeek("#week-1");
    let week2_total = calcWeek("#week-2");
    let week3_total = calcWeek("#week-3");
    let week4_total = calcWeek("#week-4");
    let week5_total = calcWeek("#week-5");
    let week6_total = calcWeek("#week-6");
    let week7_total = calcWeek("#week-7");
    let week8_total = calcWeek("#week-8");
    let week9_total = calcWeek("#week-9");
    let week10_total = calcWeek("#week-10");
    chart_data["2022-10-31"] = week1_total;
    chart_data["2022-11-07"] = week2_total;
    chart_data["2022-11-14"] = week3_total;
    chart_data["2022-11-21"] = week4_total;
    chart_data["2022-11-28"] = week5_total;
    chart_data["2022-12-05"] = week6_total;
    chart_data["2022-12-12"] = week7_total;
    chart_data["2022-12-19"] = week8_total;
    chart_data["2022-12-26"] = week9_total;
    chart_data["2023-01-02"] = week10_total;

    // new Chartkick.AreaChart("chart-1", {"2022-10-03": 37, "2022-10-10": 40, "2022-10-17": 40, "2022-10-24": 40, "2022-10-31": 40, "2022-11-07": 40,"2022-11-14": 40,"2022-11-21": 40,"2022-11-28": 40,"2022-12-05": 44});
    new Chartkick.AreaChart("chart-1", chart_data);

  }

  function storeWeek(week) {
    console.log("store "+week+"...");

    storeValIfPresent(week+' .financial_goal');
    storeValIfPresent(week+' .finacial_monday_direction');
    storeValIfPresent(week+' .financial_friday_review');
    // storeValIfPresent(week+' .financial_weekly_score');

    storeValIfPresent(week+' .health_goal');
    storeValIfPresent(week+' .health_monday_direction');
    storeValIfPresent(week+' .health_friday_review');
    // storeValIfPresent(week+' .health_weekly_score');

    storeValIfPresent(week+' .personality_goal');
    storeValIfPresent(week+' .personality_monday_direction');
    storeValIfPresent(week+' .personality_friday_review');
    // storeValIfPresent(week+' .personality_weekly_score');

    storeValIfPresent(week+' .custom_1_goal');
    storeValIfPresent(week+' .custom_1_monday_direction');
    storeValIfPresent(week+' .custom_1_friday_review');
    // storeValIfPresent(week+' .custom_1_weekly_score');

    storeValIfPresent(week+' .custom_2_goal');
    storeValIfPresent(week+' .custom_2_monday_direction');
    storeValIfPresent(week+' .custom_2_friday_review');
    // storeValIfPresent(week+' .custom_2_weekly_score');

  }

  function storeValIfPresent(key) {
    let val = document.querySelector(key).value;
    if (val) {
      localStorage.setItem(key, val);
    }
  }

  function loadWeek(week) {
    console.log("load "+week+"...");

    setValIfPresent(week+' .financial_goal');
    setValIfPresent(week+' .finacial_monday_direction');
    setValIfPresent(week+' .financial_friday_review');
    setValIfPresent(week+' .financial_weekly_score');

    setValIfPresent(week+' .health_goal');
    setValIfPresent(week+' .health_monday_direction');
    setValIfPresent(week+' .health_friday_review');
    setValIfPresent(week+' .health_weekly_score');

    setValIfPresent(week+' .personality_goal');
    setValIfPresent(week+' .personality_monday_direction');
    setValIfPresent(week+' .personality_friday_review');
    setValIfPresent(week+' .personality_weekly_score');

    setValIfPresent(week+' .custom_1_goal');
    setValIfPresent(week+' .custom_1_monday_direction');
    setValIfPresent(week+' .custom_1_friday_review');
    setValIfPresent(week+' .custom_1_weekly_score');

    setValIfPresent(week+' .custom_2_goal');
    setValIfPresent(week+' .custom_2_monday_direction');
    setValIfPresent(week+' .custom_2_friday_review');
    setValIfPresent(week+' .custom_2_weekly_score');

  }

  function setValIfPresent(key) {
    let val = localStorage.getItem(key);
    if (val) {
      document.querySelector(key).value = val;
    }
  }

  function calcWeek(week) {
    console.log("calc "+week+"...");

    let fin_week_score = Number(document.querySelector(week+' .financial_weekly_score').value);
    let health_week_score = Number(document.querySelector(week+' .health_weekly_score').value);
    let person_week_score = Number(document.querySelector(week+' .personality_weekly_score').value);
    let custom1_week_score = Number(document.querySelector(week+' .custom_1_weekly_score').value);
    let custom2_week_score = Number(document.querySelector(week+' .custom_2_weekly_score').value);

    localStorage.setItem(week+' .financial_weekly_score', fin_week_score);
    localStorage.setItem(week+' .health_weekly_score', health_week_score);
    localStorage.setItem(week+' .personality_weekly_score', person_week_score);
    localStorage.setItem(week+' .custom_1_weekly_score', custom1_week_score);
    localStorage.setItem(week+' .custom_2_weekly_score', custom2_week_score);

    let weekly_total = fin_week_score + health_week_score + person_week_score + custom1_week_score + custom2_week_score;
    document.querySelector(week+' .weekly_total').value = weekly_total;

    return weekly_total;

  }

function to_percent(num) {
	if (num) {
		return 	(num / 100);
	}

	return 0;

}

function to_currency(num) {
	const formatter = new Intl.NumberFormat('en-US', {
	  style: 'currency',
	  currency: 'USD',
	  minimumFractionDigits: 2
	});
	return formatter.format(num);
}

// #############################################################################

function calc_cap_raise(val) {
	let tot_rnd_size = document.querySelector('#tot-rnd-size').value;

	let cap_raise = (val * tot_rnd_size);
  return cap_raise;
}

function calc_per_company_sold(raise, valuation) {
  if (!valuation || valuation <= 0) {
    return 0;
  }
	let val =  raise / valuation;
  return val*100;
}


function calc_per_rnd_acct() {
  let first_per = document.querySelector('#first_per_round').value;
  let second_per_sold = document.querySelector('#sec_per_round').value;
  let third_per_sold = document.querySelector('#third_per_round').value;

  return Number(first_per) + Number(second_per_sold) + Number(third_per_sold);

}
