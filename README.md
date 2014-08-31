### Postbird

Postbird is postgresql client for Mac.
![screen shot 2014-07-08 at 7 56 52 pm](https://cloud.githubusercontent.com/assets/26019/3509770/5e85ff5e-069f-11e4-8eb0-c83656291163.png)


#### Download

**Version 0.2**

[Postgres.nw](https://github.com/Paxa/postbird/releases/download/0.2/Postbird.nw) - requires node-webkit.app

[Postgres.app](https://github.com/Paxa/postbird/releases/download/0.2/Postbird.app.zip) - For Mac: 32bit, 10.7+


#### Development

Pull requests and suggestions are welcome

To run newest version, simply:

    git clone git@github.com:Paxa/postbird.git
    cd postbird
    ./run

To make a release, run:

    ./build

New release will be at: `~/Postbird.app`

My todo:

* Content tab reload
* Reload tables if running query with "Drop table" or "Create table"