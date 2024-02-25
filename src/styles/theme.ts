const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const mainPageSizes = {
	app1st: "2004px",
	app2nd: "1737px",
	app3rd: "1374px",
	app4th: "1091px",
	app5th: "719px",
	app6th: "554px",
	app7th: "373px",
	web1st: "2175px",
	web2nd: "1767px",
	web3rd: "1247px",
	web4th: "719px",
	web5th: "635px",
};

const mainPageSize = {
	app1st: `screen and (max-width: ${mainPageSizes.app1st})`,
	app2nd: `screen and (max-width: ${mainPageSizes.app2nd})`,
	app3rd: `screen and (max-width: ${mainPageSizes.app3rd})`,
	app4th: `screen and (max-width: ${mainPageSizes.app4th})`,
	app5th: `screen and (max-width: ${mainPageSizes.app5th})`,
	app6th: `screen and (max-width: ${mainPageSizes.app6th})`,
	app7th: `screen and (max-width: ${mainPageSizes.app7th})`,
	web1st: `screen and (max-width: ${mainPageSizes.web1st})`,
	web2nd: `screen and (max-width: ${mainPageSizes.web2nd})`,
	web3rd: `screen and (max-width: ${mainPageSizes.web3rd})`,
	web4th: `screen and (max-width: ${mainPageSizes.web4th})`,
	web5th: `screen and (max-width: ${mainPageSizes.web5th})`,
};

const theme = {
  device,
	mainPageSize,
};

export default theme;