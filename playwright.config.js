/**
 * Test config.
 *
 * @description Test config file.
 *
 * @see https://playwright.dev/docs/test-configuration
 */
import { defineConfig, devices } from '@playwright/test'

export default defineConfig( {
	projects : [
		{
			name : 'chromium',
			use  : { ...devices['Desktop Chrome'] },
		},
		{
			name : 'Google Chrome',
			use  : { ...devices['Desktop Chrome'], channel: 'chrome' }, 
		},
		// {
		// 	name : 'firefox',
		// 	use  : { ...devices['Desktop Firefox'], channel: 'firefox' },
		// },
		// {
		// 	name : 'Microsoft Edge',
		// 	use  : { ...devices['Desktop Edge'], channel: 'msedge' },
		// },
	],
	testDir       : 'tests',
	testMatch     : /(.+\.)?(test|spec)\.[jt]s/,
	fullyParallel : true,
	timeout       : 120000,
} )

