//   - name: install
//     run: |
//       make install
//     env:
//       CI: true
//   - name: lint
//     run: |
//       make lint
//   - name: test
//     run: |
//       make test
//   - name: test-coverage
//     uses: paambaati/codeclimate-action@v3.0.0
//     env:
//       CC_TEST_REPORTER_ID: ${{secrets.MY_SECRET}}
//     with:
//       coverageCommand: make test-coverage
//       debug: true
