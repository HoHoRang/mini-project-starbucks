/**
 * @swagger
 * /user:
 *   post:
 *     summary: 회원 생성
 *     tags: [Users]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 철수
 *               email:
 *                 type: string
 *                 example: aaa@gmail.com
 *               personal:
 *                 type: string
 *                 example: 220101-1111111
 *               prefer:
 *                 type: string
 *                 example: https://naver.com
 *               pwd:
 *                 type: string
 *                 example: 1234
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
 *                 example: 61e62e84bf8893ecb66f35f9
 *       422:
 *           description: 실패
 *           content:
 *             application/json:
 *               schema:
 *                 type: string
 *                 example: 에러!! 핸드폰 번호가 인증되지 않았습니다
 * /users:
 *   get:
 *     summary: 회원 목록
 *     tags: [Users]
 *     responses:
 *       200:
 *           description: 성공
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   properties:
 *                     og:
 *                       type: object
 *                       properties:
 *                         title:
 *                           type: string
 *                           example: 네이버
 *                         description:
 *                           type: string
 *                           example: 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요
 *                         image:
 *                           type: string
 *                           example: https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png
 *                     _id:
 *                       type: string
 *                       example: 623d625f9eece8b5ca862630
 *                       description: _id of created user info.
 *                     name:
 *                       type: string
 *                       example: 철수
 *                       description: name of user
 *                     email:
 *                       type: string
 *                       example: aaa@gmail.com
 *                       description: email of user
 *                     personal:
 *                       type: string
 *                       example: 220110-2222222
 *                     prefer:
 *                       type: string
 *                       example: https://naver.com
 *                     pwd:
 *                       type: string
 *                       example: 1234
 *                     phone:
 *                       type: string
 *                       example: '01012345678'
 *                     __v:
 *                       type: int
 *                       example: 0

 */
