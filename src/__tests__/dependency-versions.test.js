/**
 * Property-Based Test for Dependency Version Validation
 * Feature: cv-modernization-update, Property 1: Component Compatibility Preservation
 * Validates: Requirements 1.1, 1.2, 1.3
 */

const packageJson = require('../package.json');

describe('Dependency Version Validation', () => {
  test('Property 1: Component Compatibility Preservation - Next.js version should be 15.1+', () => {
    const nextVersion = packageJson.dependencies.next;
    const versionNumber = nextVersion.replace('^', '').replace('~', '');
    const [major, minor] = versionNumber.split('.').map(Number);
    
    // Property: For any Next.js version, it should be 15.1 or higher
    expect(major).toBeGreaterThanOrEqual(15);
    if (major === 15) {
      expect(minor).toBeGreaterThanOrEqual(1);
    }
  });

  test('Property 1: Component Compatibility Preservation - React version should be 19.x', () => {
    const reactVersion = packageJson.dependencies.react;
    const reactDomVersion = packageJson.dependencies['react-dom'];
    const versionNumber = reactVersion.replace('^', '').replace('~', '');
    const [major] = versionNumber.split('.').map(Number);
    
    // Property: For any React version, it should be 19.x
    expect(major).toBe(19);
    
    // Property: React and React-DOM versions should match
    expect(reactVersion).toBe(reactDomVersion);
  });

  test('Property 1: Component Compatibility Preservation - Chakra UI version should be 3.x', () => {
    const chakraVersion = packageJson.dependencies['@chakra-ui/react'];
    const versionNumber = chakraVersion.replace('^', '').replace('~', '');
    const [major] = versionNumber.split('.').map(Number);
    
    // Property: For any Chakra UI version, it should be 3.x
    expect(major).toBe(3);
  });

  test('Property 1: Component Compatibility Preservation - All dependencies should have valid version formats', () => {
    const dependencies = packageJson.dependencies;
    
    // Property: For any dependency, version should follow semantic versioning
    Object.entries(dependencies).forEach(([name, version]) => {
      expect(version).toMatch(/^[\^~]?\d+\.\d+\.\d+$/);
    });
  });

  test('Property 1: Component Compatibility Preservation - DevDependencies should be compatible', () => {
    const devDependencies = packageJson.devDependencies;
    
    // Property: For any dev dependency, version should follow semantic versioning
    Object.entries(devDependencies).forEach(([name, version]) => {
      expect(version).toMatch(/^[\^~]?\d+\.\d+\.\d+$/);
    });
    
    // ESLint config should match Next.js version
    const nextVersion = packageJson.dependencies.next;
    const eslintConfigVersion = devDependencies['eslint-config-next'];
    const nextMajor = nextVersion.replace('^', '').split('.')[0];
    const eslintMajor = eslintConfigVersion.replace('^', '').split('.')[0];
    
    expect(nextMajor).toBe(eslintMajor);
  });
});