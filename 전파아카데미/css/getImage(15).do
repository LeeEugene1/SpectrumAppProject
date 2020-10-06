








	
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="Content-Script-Type" content="text/javascript" />
    <meta http-equiv="Content-Style-Type" content="text/css" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>K-ICT_스펙트럼</title>
    <link type="text/css" rel="stylesheet" href="/css/jquery-ui.css"/>
    <link type="text/css" rel="stylesheet" href="/css/common.css" />
    <link type="text/css" rel="stylesheet" href="/css/style.css" />
    <style>
@media (max-width: 600px) {
    .error { width: 100%; }
    .error .top01 { padding-left: 30%; background-size: 25%; background-position: 1% 5%; }
    .mgr50 { margin-right: 5% !important; } 
}
    </style>
</head>
<body style="min-width: auto;">
        <div class="error" style="position: absolute; margin: auto; height: 250px; left: 0; top: 0; right: 0; bottom: 0;">
            <div class="top01">
                <span class="sp01">시스템 오류</span><br/>
                <span class="sp02">이용에 불편을 드려 죄송합니다.</span><br/>
                <span class="sp03">
                    시스템 장애로 인해 정상적인 화면이 호출되지않고 있습니다.<br/>
                    인터넷 창을 다시 띄우거나 잠시 후에 이용하여 주시기 바랍니다.
                </span>
            </div>
            <div class="text_c">
                <a href="/index.do" class="btn_gy01 mgr50">메 인</a>
                <a href="javascript:window.history.back()" class="btn_gy03">이 전</a>
            </div>
        </div>

<!--
org.mybatis.spring.MyBatisSystemException: nested exception is org.apache.ibatis.exceptions.PersistenceException: 
### Error querying database.  Cause: java.lang.IllegalStateException: Illegal access: this web application instance has been stopped already. Could not load [oracle/sql/converter_xcharset/lx2034e.glb]. The following stack trace is thrown for debugging purposes as well as to attempt to terminate the thread which caused the illegal access.
### The error may exist in file [D:\eGovFrameDev-3.8.0-64bit\workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp1\wtpwebapps\KCA_SPTM_2019_NEW\WEB-INF\classes\egovframework\sqlmap\mappers\com\cmm\fms\EgovFile.xml]
### The error may involve FileManageDAO.getMaxFileSN
### The error occurred while executing a query
### Cause: java.lang.IllegalStateException: Illegal access: this web application instance has been stopped already. Could not load [oracle/sql/converter_xcharset/lx2034e.glb]. The following stack trace is thrown for debugging purposes as well as to attempt to terminate the thread which caused the illegal access.
	at org.mybatis.spring.MyBatisExceptionTranslator.translateExceptionIfPossible(MyBatisExceptionTranslator.java:76)
	at org.mybatis.spring.SqlSessionTemplate$SqlSessionInterceptor.invoke(SqlSessionTemplate.java:399)
	at com.sun.proxy.$Proxy87.selectOne(Unknown Source)
	at org.mybatis.spring.SqlSessionTemplate.selectOne(SqlSessionTemplate.java:165)
	at egovframework.rte.psl.dataaccess.EgovAbstractMapper.selectOne(EgovAbstractMapper.java:160)
	at egovframework.com.cmm.service.impl.FileManageDAO.getMaxFileSN(FileManageDAO.java:139)
	at egovframework.com.cmm.service.impl.EgovFileMngServiceImpl.getMaxFileSN(EgovFileMngServiceImpl.java:130)
	at egovframework.com.cmm.web.EgovImageProcessController.getImageInf(EgovImageProcessController.java:78)
	at sun.reflect.GeneratedMethodAccessor300.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.springframework.web.method.support.InvocableHandlerMethod.invoke(InvocableHandlerMethod.java:215)
	at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:132)
	at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:110)
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandleMethod(RequestMappingHandlerAdapter.java:781)
	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:721)
	at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:83)
	at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:943)
	at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:877)
	at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:966)
	at org.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java:857)
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:634)
	at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:842)
	at javax.servlet.http.HttpServlet.service(HttpServlet.java:741)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:231)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)
	at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)
	at com.nextweb.xtractor.mc.filter.XtractorVIDCookieFilter.doFilter(XtractorVIDCookieFilter.java:284)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)
	at org.springframework.web.filter.HiddenHttpMethodFilter.doFilterInternal(HiddenHttpMethodFilter.java:77)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)
	at egovframework.com.cmm.filter.SimpleCORSFilter.doFilter(SimpleCORSFilter.java:27)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)
	at com.navercorp.lucy.security.xss.servletfilter.XssEscapeServletFilter.doFilter(XssEscapeServletFilter.java:36)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)
	at org.springframework.mobile.device.DeviceResolverRequestFilter.doFilterInternal(DeviceResolverRequestFilter.java:60)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)
	at egovframework.rte.ptl.mvc.filter.HTMLTagFilter.doFilter(HTMLTagFilter.java:52)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)
	at org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:88)
	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)
	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)
	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)
	at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:199)
	at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:96)
	at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:493)
	at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:137)
	at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:81)
	at org.apache.catalina.valves.AbstractAccessLogValve.invoke(AbstractAccessLogValve.java:660)
	at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:87)
	at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:343)
	at org.apache.coyote.http11.Http11Processor.service(Http11Processor.java:798)
	at org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:66)
	at org.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java:808)
	at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1498)
	at org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:49)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61)
	at java.lang.Thread.run(Thread.java:748)
Caused by: org.apache.ibatis.exceptions.PersistenceException: 
### Error querying database.  Cause: java.lang.IllegalStateException: Illegal access: this web application instance has been stopped already. Could not load [oracle/sql/converter_xcharset/lx2034e.glb]. The following stack trace is thrown for debugging purposes as well as to attempt to terminate the thread which caused the illegal access.
### The error may exist in file [D:\eGovFrameDev-3.8.0-64bit\workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp1\wtpwebapps\KCA_SPTM_2019_NEW\WEB-INF\classes\egovframework\sqlmap\mappers\com\cmm\fms\EgovFile.xml]
### The error may involve FileManageDAO.getMaxFileSN
### The error occurred while executing a query
### Cause: java.lang.IllegalStateException: Illegal access: this web application instance has been stopped already. Could not load [oracle/sql/converter_xcharset/lx2034e.glb]. The following stack trace is thrown for debugging purposes as well as to attempt to terminate the thread which caused the illegal access.
	at org.apache.ibatis.exceptions.ExceptionFactory.wrapException(ExceptionFactory.java:30)
	at org.apache.ibatis.session.defaults.DefaultSqlSession.selectList(DefaultSqlSession.java:122)
	at org.apache.ibatis.session.defaults.DefaultSqlSession.selectList(DefaultSqlSession.java:113)
	at org.apache.ibatis.session.defaults.DefaultSqlSession.selectOne(DefaultSqlSession.java:73)
	at sun.reflect.GeneratedMethodAccessor298.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.mybatis.spring.SqlSessionTemplate$SqlSessionInterceptor.invoke(SqlSessionTemplate.java:386)
	... 68 more
Caused by: java.lang.IllegalStateException: Illegal access: this web application instance has been stopped already. Could not load [oracle/sql/converter_xcharset/lx2034e.glb]. The following stack trace is thrown for debugging purposes as well as to attempt to terminate the thread which caused the illegal access.
	at org.apache.catalina.loader.WebappClassLoaderBase.checkStateForResourceLoading(WebappClassLoaderBase.java:1380)
	at org.apache.catalina.loader.WebappClassLoaderBase.getResource(WebappClassLoaderBase.java:1032)
	at java.lang.Class.getResource(Class.java:2267)
	at oracle.sql.ConverterArchive.readObj(ConverterArchive.java:395)
	at oracle.sql.converter.CharacterConverterJDBC.getInstance(CharacterConverterJDBC.java:144)
	at oracle.sql.converter.CharacterConverterFactoryJDBC.make(CharacterConverterFactoryJDBC.java:45)
	at oracle.sql.CharacterSetWithConverter.getInstance(CharacterSetWithConverter.java:97)
	at oracle.sql.CharacterSetFactoryThin.make(CharacterSetFactoryThin.java:129)
	at oracle.sql.CharacterSet.make(CharacterSet.java:515)
	at oracle.jdbc.driver.DBConversion.init(DBConversion.java:171)
	at oracle.jdbc.driver.DBConversion.<init>(DBConversion.java:122)
	at oracle.jdbc.driver.T4CConnection.connect(T4CConnection.java:1173)
	at oracle.jdbc.driver.T4CConnection.logon(T4CConnection.java:340)
	at oracle.jdbc.driver.PhysicalConnection.<init>(PhysicalConnection.java:553)
	at oracle.jdbc.driver.T4CConnection.<init>(T4CConnection.java:254)
	at oracle.jdbc.driver.T4CDriverExtension.getConnection(T4CDriverExtension.java:32)
	at oracle.jdbc.driver.OracleDriver.connect(OracleDriver.java:528)
	at org.apache.tomcat.dbcp.dbcp2.DriverConnectionFactory.createConnection(DriverConnectionFactory.java:53)
	at org.apache.tomcat.dbcp.dbcp2.PoolableConnectionFactory.makeObject(PoolableConnectionFactory.java:355)
	at org.apache.tomcat.dbcp.pool2.impl.GenericObjectPool.create(GenericObjectPool.java:890)
	at org.apache.tomcat.dbcp.pool2.impl.GenericObjectPool.borrowObject(GenericObjectPool.java:423)
	at org.apache.tomcat.dbcp.pool2.impl.GenericObjectPool.borrowObject(GenericObjectPool.java:348)
	at org.apache.tomcat.dbcp.dbcp2.PoolingDataSource.getConnection(PoolingDataSource.java:134)
	at org.apache.tomcat.dbcp.dbcp2.BasicDataSource.getConnection(BasicDataSource.java:809)
	at org.springframework.jdbc.datasource.DataSourceUtils.doGetConnection(DataSourceUtils.java:111)
	at org.springframework.jdbc.datasource.DataSourceUtils.getConnection(DataSourceUtils.java:77)
	at org.mybatis.spring.transaction.SpringManagedTransaction.openConnection(SpringManagedTransaction.java:82)
	at org.mybatis.spring.transaction.SpringManagedTransaction.getConnection(SpringManagedTransaction.java:68)
	at org.apache.ibatis.executor.BaseExecutor.getConnection(BaseExecutor.java:315)
	at org.apache.ibatis.executor.SimpleExecutor.prepareStatement(SimpleExecutor.java:75)
	at org.apache.ibatis.executor.SimpleExecutor.doQuery(SimpleExecutor.java:61)
	at org.apache.ibatis.executor.BaseExecutor.queryFromDatabase(BaseExecutor.java:303)
	at org.apache.ibatis.executor.BaseExecutor.query(BaseExecutor.java:154)
	at org.apache.ibatis.executor.CachingExecutor.query(CachingExecutor.java:102)
	at org.apache.ibatis.executor.CachingExecutor.query(CachingExecutor.java:82)
	at sun.reflect.GeneratedMethodAccessor292.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.apache.ibatis.plugin.Invocation.proceed(Invocation.java:49)
	at kr.kca.kspec.aop.MybatisInterceptor.intercept(MybatisInterceptor.java:104)
	at org.apache.ibatis.plugin.Plugin.invoke(Plugin.java:61)
	at com.sun.proxy.$Proxy109.query(Unknown Source)
	at org.apache.ibatis.session.defaults.DefaultSqlSession.selectList(DefaultSqlSession.java:120)
	... 74 more

-->

</body>
</html>
	