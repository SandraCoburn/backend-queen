exports.seed = function (knex) {
  return knex('visits').insert([
    {
      id: { $oid: '5fa2d5cffc13ae5d48000000' },
      domain: 'w3.org',
      visitors: 96,
      date: '2020-01-16T04:23:13Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000001' },
      domain: 'nytimes.com',
      visitors: 613,
      date: '2019-12-09T08:34:28Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000002' },
      domain: 'imgur.com',
      visitors: 452,
      date: '2020-05-27T12:17:16Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000003' },
      domain: 'huffingtonpost.com',
      visitors: 126,
      date: '2020-05-04T12:55:10Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000004' },
      domain: 'netlog.com',
      visitors: 64,
      date: '2020-07-04T14:40:26Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000005' },
      domain: 'toplist.cz',
      visitors: 84,
      date: '2020-03-31T19:39:38Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000006' },
      domain: 'zdnet.com',
      visitors: 323,
      date: '2019-11-07T13:14:34Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000007' },
      domain: 'miitbeian.gov.cn',
      visitors: 12,
      date: '2020-06-18T10:43:15Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000008' },
      domain: 'myspace.com',
      visitors: 786,
      date: '2020-06-01T00:50:04Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000009' },
      domain: 'edublogs.org',
      visitors: 740,
      date: '2020-10-27T01:01:31Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800000a' },
      domain: 'webmd.com',
      visitors: 512,
      date: '2019-12-24T08:06:48Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800000b' },
      domain: 'cbc.ca',
      visitors: 477,
      date: '2020-01-03T18:57:46Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800000c' },
      domain: 'europa.eu',
      visitors: 788,
      date: '2020-03-03T06:14:11Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800000d' },
      domain: 'hugedomains.com',
      visitors: 403,
      date: '2020-09-08T11:52:37Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800000e' },
      domain: 'auda.org.au',
      visitors: 613,
      date: '2020-08-27T05:13:43Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800000f' },
      domain: 'hugedomains.com',
      visitors: 760,
      date: '2020-08-23T00:19:43Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000010' },
      domain: 'miibeian.gov.cn',
      visitors: 381,
      date: '2020-04-17T17:54:34Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000011' },
      domain: 'bloglovin.com',
      visitors: 107,
      date: '2019-11-17T15:30:18Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000012' },
      domain: 'bbb.org',
      visitors: 176,
      date: '2019-10-28T13:29:09Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000013' },
      domain: 'instagram.com',
      visitors: 726,
      date: '2019-11-09T10:14:56Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000014' },
      domain: 'a8.net',
      visitors: 95,
      date: '2020-07-08T15:58:44Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000015' },
      domain: 't.co',
      visitors: 964,
      date: '2020-07-08T11:23:24Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000016' },
      domain: 'yellowbook.com',
      visitors: 907,
      date: '2020-01-01T15:04:26Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000017' },
      domain: 'de.vu',
      visitors: 881,
      date: '2019-12-01T01:21:05Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000018' },
      domain: 'desdev.cn',
      visitors: 204,
      date: '2019-11-17T01:09:00Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000019' },
      domain: 'prweb.com',
      visitors: 252,
      date: '2020-07-14T06:18:49Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800001a' },
      domain: 'pinterest.com',
      visitors: 99,
      date: '2020-07-29T09:16:46Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800001b' },
      domain: 'dell.com',
      visitors: 701,
      date: '2019-10-03T12:36:24Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800001c' },
      domain: 'ebay.co.uk',
      visitors: 496,
      date: '2020-02-26T03:48:52Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800001d' },
      domain: 'yellowpages.com',
      visitors: 13,
      date: '2020-10-18T01:50:33Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800001e' },
      domain: 'alexa.com',
      visitors: 893,
      date: '2020-08-22T12:10:40Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800001f' },
      domain: 'over-blog.com',
      visitors: 541,
      date: '2020-07-01T00:42:19Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000020' },
      domain: 'rakuten.co.jp',
      visitors: 137,
      date: '2019-12-10T07:37:30Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000021' },
      domain: 'msu.edu',
      visitors: 253,
      date: '2020-07-27T07:55:31Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000022' },
      domain: 'wired.com',
      visitors: 926,
      date: '2020-08-08T04:21:15Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000023' },
      domain: 'soup.io',
      visitors: 198,
      date: '2020-07-04T04:16:08Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000024' },
      domain: 'msu.edu',
      visitors: 706,
      date: '2020-04-27T16:06:04Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000025' },
      domain: 'youku.com',
      visitors: 999,
      date: '2020-06-23T17:29:25Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000026' },
      domain: 'opera.com',
      visitors: 141,
      date: '2019-11-01T14:21:39Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000027' },
      domain: 'dell.com',
      visitors: 17,
      date: '2019-11-25T07:15:00Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000028' },
      domain: 'wired.com',
      visitors: 436,
      date: '2019-12-26T10:34:46Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000029' },
      domain: 'nature.com',
      visitors: 490,
      date: '2019-10-21T20:02:30Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800002a' },
      domain: 'umn.edu',
      visitors: 208,
      date: '2019-12-24T01:14:36Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800002b' },
      domain: 'theglobeandmail.com',
      visitors: 780,
      date: '2020-07-27T18:58:44Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800002c' },
      domain: 'who.int',
      visitors: 846,
      date: '2020-02-10T06:29:18Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800002d' },
      domain: 'un.org',
      visitors: 963,
      date: '2020-05-29T15:02:24Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800002e' },
      domain: 'netvibes.com',
      visitors: 987,
      date: '2020-01-13T18:56:18Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800002f' },
      domain: 'theglobeandmail.com',
      visitors: 633,
      date: '2020-08-21T22:35:32Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000030' },
      domain: 'opensource.org',
      visitors: 714,
      date: '2020-01-11T06:16:19Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000031' },
      domain: 'reuters.com',
      visitors: 667,
      date: '2020-03-26T05:43:24Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000032' },
      domain: 'spotify.com',
      visitors: 722,
      date: '2020-03-08T06:24:17Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000033' },
      domain: 'blinklist.com',
      visitors: 18,
      date: '2020-09-09T15:31:15Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000034' },
      domain: 'artisteer.com',
      visitors: 699,
      date: '2019-12-23T14:22:40Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000035' },
      domain: 'toplist.cz',
      visitors: 998,
      date: '2020-10-06T05:07:58Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000036' },
      domain: 'etsy.com',
      visitors: 5,
      date: '2019-10-13T17:14:22Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000037' },
      domain: 'google.fr',
      visitors: 685,
      date: '2019-10-21T15:07:50Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000038' },
      domain: 'canalblog.com',
      visitors: 903,
      date: '2020-03-27T16:25:21Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000039' },
      domain: 'craigslist.org',
      visitors: 49,
      date: '2019-11-10T09:31:28Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800003a' },
      domain: 'pbs.org',
      visitors: 278,
      date: '2020-07-15T15:14:42Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800003b' },
      domain: 'lulu.com',
      visitors: 55,
      date: '2020-06-14T22:56:00Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800003c' },
      domain: 'edublogs.org',
      visitors: 550,
      date: '2020-03-08T04:04:08Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800003d' },
      domain: 'last.fm',
      visitors: 321,
      date: '2020-02-26T14:06:01Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800003e' },
      domain: 'hc360.com',
      visitors: 179,
      date: '2020-06-28T17:49:17Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800003f' },
      domain: 'posterous.com',
      visitors: 436,
      date: '2020-04-02T09:32:12Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000040' },
      domain: 'instagram.com',
      visitors: 934,
      date: '2019-12-09T01:44:43Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000041' },
      domain: 'boston.com',
      visitors: 828,
      date: '2020-02-22T18:31:27Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000042' },
      domain: 'sciencedaily.com',
      visitors: 427,
      date: '2019-11-27T13:16:06Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000043' },
      domain: 'theatlantic.com',
      visitors: 649,
      date: '2020-01-10T07:35:02Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000044' },
      domain: 'cnbc.com',
      visitors: 564,
      date: '2020-08-06T16:28:44Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000045' },
      domain: 'so-net.ne.jp',
      visitors: 301,
      date: '2020-10-08T00:12:56Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000046' },
      domain: 'wired.com',
      visitors: 521,
      date: '2020-08-23T03:00:55Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000047' },
      domain: 'gmpg.org',
      visitors: 597,
      date: '2020-10-13T19:53:08Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000048' },
      domain: 'microsoft.com',
      visitors: 809,
      date: '2020-03-27T03:46:15Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d48000049' },
      domain: 'techcrunch.com',
      visitors: 37,
      date: '2020-06-30T09:10:39Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800004a' },
      domain: 'google.pl',
      visitors: 868,
      date: '2020-04-04T10:27:02Z',
    },
    {
      id: { $oid: '5fa2d5cffc13ae5d4800004b' },
      domain: 'hud.gov',
      visitors: 845,
      date: '2020-03-29T12:21:25Z',
    },
  ]);
};
