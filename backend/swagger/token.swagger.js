/**
 * @swagger
 * /tokens/phone:
 *   post:
 *     summary: 토큰 인증 요청
 *     tags: [Tokens]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: '01012345678'
 *     responses:
 *       200:
 *           description: 성공
 *           content:
 *             application/json:
 *               schema:
 *                 type: string
 *                 example: 토큰SMS 전송완료!
 *   patch:
 *     summary: 토큰 인증 완료
 *     tags: [Tokens]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: '01012345678'
 *               token:
 *                 type: string
 *                 example: 380803
 *     responses:
 *       200:
 *           description: 성공
 *           content:
 *             application/json:
 *               schema:
 *                 type: boolean
 *                 example: true
 *               examples:
 *                 success:
 *                   summary: Example of a successful response
 *                   value: true
 *                 error:
 *                   summary: Example of an error response
 *                   value: false
 */
