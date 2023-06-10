let ourData = `[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]`

let datas = JSON.parse(ourData);

const titles = document.querySelectorAll('.title'),
      currentHrs = document.querySelectorAll('.current'),
      previousHrs = document.querySelectorAll('.previous'),
      menu = document.querySelector('.menu ul'),
      menuBtn = document.querySelectorAll('.menu ul li');

      titles.forEach((t, i) => {
        weeklyHrs(i);
      })

menu.addEventListener('click', (e) => {
    let id  = e.target.id;

    menuBtn.forEach(btn => {
        if(btn.classList.contains('click')){
            btn.classList.remove('click');
        }
    })

    let btn = e.target;
    btn.classList.toggle('click');

    

    titles.forEach((t, i) => {
        t.innerHTML = datas[i].title;
        if(id === 'daily') { dailyHrs(i); } 
        else if(id === 'weekly') { weeklyHrs(i); } 
        else if(id === 'monthly') { monthlyHrs(i) }
    })
})

function dailyHrs(n) {
    currentHrs[n].innerHTML = `${datas[n].timeframes.daily.current}hrs`;
    previousHrs[n].innerHTML = `${datas[n].timeframes.daily.previous}hrs`;
}

function weeklyHrs(n) {
    currentHrs[n].innerHTML = `${datas[n].timeframes.weekly.current}hrs`;
    previousHrs[n].innerHTML = `${datas[n].timeframes.weekly.previous}hrs`;
}

function monthlyHrs(n) {
    currentHrs[n].innerHTML = `${datas[n].timeframes.monthly.current}hrs`;
    previousHrs[n].innerHTML = `${datas[n].timeframes.monthly.previous}hrs`;
}
