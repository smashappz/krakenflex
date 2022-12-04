const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const url = "https://api.krakenflex.systems/interview-tests-mock-api/v1";
const key = "EltgJ5G8m44IzwE6UN2Y4B4NjPW77Zk6FJK3lL23";

const cutoffDate = new Date("2022-01-01T00:00:00.000Z").getTime();

const siteId = "norwich-pear-tree";

const findDeviceName = (devices, id) => {
  const device = devices.find((device) => device.id === id);

  return device ? device.name : "";
};

async function getOutages() {
  try {
    const response = await fetch(`${url}/outages`, {
      method: "GET",
      headers: { "x-api-key": key },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function getSiteInfo(siteId) {
  try {
    const response = await fetch(`${url}/site-info/${siteId}`, {
      method: "GET",
      headers: { "x-api-key": key },
    });

    return await response.json();
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function sendOutageList(siteId, outages) {
  try {
    const response = await fetch(`${url}/site-outages/${siteId}`, {
      method: "POST",
      body: JSON.stringify(outages),
      headers: { "x-api-key": key, "Content-Type": "application/json" },
    });

    console.log(`${response.status} ${response.statusText}`);
  } catch (error) {
    console.log(error);
  }
}

function getSiteOutagesAfterCutOffDate(outages, siteInfo, date) {
  const recentOutages = outages.filter(
    (outage) => new Date(outage.begin).getTime() >= date
  );

  const devices = siteInfo.devices;

  return recentOutages
    .filter((outage) => devices.find((device) => device.id === outage.id))
    .map((outage) => ({
      ...outage,
      name: findDeviceName(devices, outage.id),
    }));
}


// main

Promise.all([getOutages(), getSiteInfo(siteId)]).then((values) => {
  try {
    const [outages, siteInfo] = values;

    if (outages && siteInfo) {
      const siteOutages = getSiteOutagesAfterCutOffDate(
        outages,
        siteInfo,
        cutoffDate
      );
      
      sendOutageList(siteId, siteOutages);
    }
  } catch (error) {}
});
